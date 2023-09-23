import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchDataSearch } from './dataSearchSlice';
import { useParams } from 'react-router-dom';

const DataSearch = () => {
    const dispatch = useAppDispatch()
    const { route } = useParams()
    const url = `${import.meta.env.VITE_REACT_API_URL}/features/${route}`

    useEffect(() => {
        dispatch(fetchDataSearch(url))
    }, [dispatch, url])

    const dataSearch = useAppSelector(state => state.dataSearch)
    console.log('dataSearch')
    console.log(dataSearch)
    return ( 
        <div className="main-container">
           <div>
            hi
           </div>
        </div>
    );
}
 
export default DataSearch;