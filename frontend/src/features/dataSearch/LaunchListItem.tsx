import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchLaunchData } from './dataSearchSlice';
import placeholder from '../../images/rocket.webp';

const LaunchListItem = (/* { searchInput } */) => {

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
    // const filteredLaunches = launches.filter((launch) => {
    //     return Object.values(launch)?.some((value) =>
    //     value?.toString()?.toLowerCase()?.includes(searchInput?.toLowerCase())
    //     );
    // });

    // Iterate Filtered Data
    const ids = lauchData?.map(launch => launch.id);
    const flightNumbers = lauchData?.map(launch => launch.flight_number);
    const names = lauchData?.map(launch => launch.name);
    const years = lauchData?.map((launch) => {
        const date = new Date(launch.date_utc);
        return date.getFullYear();
    });
    // const desc = lauchData?.map(launch => launch.details);
    const rocket = lauchData?.map(launch => launch.links.patch.small);

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

    // return (<></>);
    return listItem;
}

export default LaunchListItem;
