import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchFeatures } from "../home/homeSlice";
import { useParams } from 'react-router-dom';

const DataSearch = () => {
    const route = useParams().route;
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchFeatures())
    }, [dispatch])

    const features = useAppSelector(state => state.home.homeFeatures)
    console.log('features')
    console.log(features)
    return ( 
        <div className="main-container">
           <div>
            hi
           </div>
        </div>
    );
}
 
export default DataSearch;