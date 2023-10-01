import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchLaunchData } from './dataSearchSlice';
import placeholder from '../../images/rocket.webp';

type LaunchListItemProps = {
    searchInput: string; 
    filter: string
}

const LaunchListItem: React.FC<LaunchListItemProps> = ( { searchInput, filter } ) => {

    const dispatch = useAppDispatch()
    const lauchDataURL = 'https://api.spacexdata.com/v4/launches/'

    useEffect(() => {
        dispatch(fetchLaunchData(lauchDataURL))
    }, [dispatch, lauchDataURL])

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

    const lauchData = useAppSelector(state => state.launchData.data) as LaunchData[]

    // Filter launches based on the search input
    const searchFilter = lauchData?.filter((launch) => {
        return Object.values(launch)?.some((value) =>
        value?.toString()?.toLowerCase()?.includes(searchInput?.toLowerCase())
        );
    });

    let filteredLaunches;
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

    // Iterate items
    const listItem = ids?.map((id, i) => {
        return ( 
            <li key={id}>
                <div className='list-item'>
                    <img src={rocket![i] || placeholder} alt={names![i]} loading='lazy' />
                    <div className='list-details'>
                        <p className='mission'>
                            {`${flightNumbers![i]}: ${names![i]} (${years![i]})`}
                        </p>
                    </div>
                </div>
            </li>
        );
    });

    return listItem;
}

export default LaunchListItem;
