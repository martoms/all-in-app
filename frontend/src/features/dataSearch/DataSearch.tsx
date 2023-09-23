import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchDataSearch } from './dataSearchSlice';
import { useParams } from 'react-router-dom';
import LaunchList from './LaunchList';

const DataSearch = () => {
    const dispatch = useAppDispatch()
    const { route } = useParams()
    const url = `${import.meta.env.VITE_REACT_API_URL}/features/${route}`

    useEffect(() => {
        dispatch(fetchDataSearch(url))
    }, [dispatch, url])

    const dataSearch = useAppSelector(state => state.dataSearch.data)
    const title = dataSearch?.title;
    const description =dataSearch?.description;

    return ( 
        <div className="main-container">
           <div>
                <h1>{ title }</h1>
                <hr className="hr-left" />
                <p>{ description }</p>
           </div>
           <div className='feature-container'>
                <LaunchList />
           </div>
        </div>
    );
}
 
export default DataSearch;