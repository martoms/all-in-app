import { useEffect } from 'react';
import { useAppSelector } from "../../hooks/useReduxSelectors";
import { useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchDataSearch } from './dataSearchSlice';
import { useParams } from 'react-router-dom';

const DataSearchHeader = () => {

    const dispatch = useAppDispatch();
    const { route } = useParams();
    const dataSearchURL = `${import.meta.env.VITE_REACT_API_URL}/features/${route}`

    useEffect(() => {
        dispatch(fetchDataSearch(dataSearchURL))
    }, [dispatch, dataSearchURL])

    const dataSearch = useAppSelector(state => state.dataSearch.data)
    const title = dataSearch?.title;
    const description = dataSearch?.description;

    return ( 
        <div>
            <h1>{ title }</h1>
            <hr className="hr-left" />
            <p>{ description }</p>
        </div>
    );
}
 
export default DataSearchHeader;