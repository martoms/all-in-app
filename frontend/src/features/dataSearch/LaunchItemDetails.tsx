import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchLaunchData } from './dataSearchSlice';
import { useParams } from 'react-router-dom';
import placeholder from '../../images/rocket.webp'

const LaunchItemDetails = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const launchDataURL = 'https://api.spacexdata.com/v4/launches/'

    useEffect(() => {
        dispatch(fetchLaunchData(launchDataURL))
    }, [dispatch, launchDataURL])

    type LaunchData = {
        id: string;
        name: string;
        date_utc: string;
        details: string;
        links: {
            patch: {
                small: string
            },
            webcast: string,
            article: string
        },
        failures: [
            time: string,
            altitude: string | null,
            reason: string
        ]
    }

    const launchData = useAppSelector(state => state.launchData.data) as LaunchData[]

    const launchItem = launchData?.filter(data => data.id === id)[0]

    if (!launchItem) return false

    const {
        name,
        date_utc,
        details,
        links: {
            patch: { small },
            webcast,
            article
        },
        failures
    } = launchItem

    // const failureCount = failures?.map(data => data?.time)


    return ( 
        <div id="launch-details">
            <div className='side'>
                <img src={small || placeholder} alt={name} />
                <p>{name}</p>
            </div>
            <div className='main'>
                <p>{details}</p>
            </div>
        </div>
    );
}
 
export default LaunchItemDetails;