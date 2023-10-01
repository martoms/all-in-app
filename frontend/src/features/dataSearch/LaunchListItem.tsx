import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchLaunchData } from './dataSearchSlice';
import placeholder from '../../images/rocket.webp';

type LaunchListItemProps = {
    searchInput: string; 
}

const LaunchListItem: React.FC<LaunchListItemProps> = ( { searchInput } ) => {

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
        // details: string;
        links: {
            patch: {
                small: string
            }
        }
    }

    const lauchData = useAppSelector(state => state.launchData.data) as LaunchData[]

    // Filter launches based on the search input
    const filteredLaunches = lauchData.filter((launch) => {
        return Object.values(launch)?.some((value) =>
        value?.toString()?.toLowerCase()?.includes(searchInput?.toLowerCase())
        );
    });

    // Iterate Filtered Data
    const ids = filteredLaunches?.map(launch => launch.id);
    const flightNumbers = filteredLaunches?.map(launch => launch.flight_number);
    const names = filteredLaunches?.map(launch => launch.name);
    const years = filteredLaunches?.map((launch) => {
        const date = new Date(launch.date_utc);
        return date.getFullYear();
    });
    // const desc = lauchData?.map(launch => launch.details);
    const rocket = filteredLaunches?.map(launch => launch.links.patch.small);

    // Iterate items
    const listItem = ids?.map((id, i) => {
        return ( 
            <li key={id}>
                <div className='list-item'>
                    <img src={rocket[i] || placeholder} alt={names[i]} loading='lazy' />
                    <div className='list-details'>
                        <p className='mission'>
                            {`${flightNumbers[i]}: ${names[i]} (${years[i]})`}
                        </p>
                        {/* <p className='desc'>
                            {desc[i]}
                        </p> */}
                    </div>
                </div>
            </li>
        );
    });

    return listItem;
}

export default LaunchListItem;
