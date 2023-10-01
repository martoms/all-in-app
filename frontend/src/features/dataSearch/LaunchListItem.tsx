import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchLaunchData } from './dataSearchSlice';
import placeholder from '../../images/rocket.webp';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

type LaunchListItemProps = {
    searchInput: string; 
    filter: string;
    setResultCount: (count: number) => void;
}

const LaunchListItem: React.FC<LaunchListItemProps> = ( { searchInput, filter, setResultCount } ) => {
    
    const { route } = useParams();
    const dispatch = useAppDispatch();
    const launchDataURL = 'https://api.spacexdata.com/v4/launches/'

    useEffect(() => {
        dispatch(fetchLaunchData(launchDataURL))
    }, [dispatch, launchDataURL])

    interface LaunchData {
        id: string;
        flight_number: string;
        name: string;
        date_utc: string;
        success: boolean;
        links: {
            patch: {
                small: string
            }
        }
    }

    const launchData = useAppSelector(state => state.launchData.data) as LaunchData[]

    // Filter launches based on the search input
    const searchFilter = launchData?.filter((launch) => {
        return Object.values(launch)?.some((value) =>
        value?.toString()?.toLowerCase()?.includes(searchInput?.toLowerCase())
        );
    });

    // Filter launches based on the selected filter
    let filteredLaunches: LaunchData[] | null = null;
    if (filter === 'oldest') {
        filteredLaunches = searchFilter?.sort((a, b) => {
            return Number(a.flight_number) - Number(b.flight_number)
        });
    } else if (filter === 'latest') {
        filteredLaunches = searchFilter?.sort((a, b) => {
            return Number(b.flight_number) - Number(a.flight_number)
        });
    } else if (filter === 'successful') {
        filteredLaunches = searchFilter?.filter((launch) => {
            return launch.success
        })
    } else if (filter === 'failed') {
        filteredLaunches = searchFilter?.filter((launch) => {
            return launch.success === false
        })
    }

    // Iterate Filtered Data
    const ids = filteredLaunches?.map(launch => launch.id);
    const flightNumbers = filteredLaunches?.map(launch => launch.flight_number);
    const names = filteredLaunches?.map(launch => launch.name);
    const years = filteredLaunches?.map((launch) => {
        const date = new Date(launch.date_utc);
        return date.getFullYear();
    });
    const rocket = filteredLaunches?.map(launch => launch.links.patch.small);

    const resultCount = filteredLaunches?.length || 0;

    useEffect(() => {
        setResultCount(resultCount);
    }, [resultCount, setResultCount]);

    // Iterate items
    const listItem = ids?.map((id, i) => {
        return ( 
            <Link key= { id } to={`/features/${route}/${id}`}>
                <li>
                    <div className='list-item'>
                        <img src={rocket![i] || placeholder} alt={names![i]} loading='lazy' />
                        <div className='list-details'>
                            <p className='mission'>
                                {`${flightNumbers![i]}: ${names![i]} (${years![i]})`}
                            </p>
                        </div>
                    </div>
                </li>
            </Link>
        );
    });

    return listItem;
}

export default LaunchListItem;