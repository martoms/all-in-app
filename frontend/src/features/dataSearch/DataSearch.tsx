import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxSelectors";
import { fetchDataSearch } from './dataSearchSlice';
import { useParams } from 'react-router-dom';
import LaunchList from './LaunchList';
import ExpandToggle from '../../components/ExpandToggle';
import useExpandToggle from '../../hooks/useExpandToggle';

const DataSearch = () => {

    const { expandToggle, handleExpandToggle } = useExpandToggle()

    const dispatch = useAppDispatch()
    const { route } = useParams()
    const dataSearchURL = `${import.meta.env.VITE_REACT_API_URL}/features/${route}`

    useEffect(() => {
        dispatch(fetchDataSearch(dataSearchURL))
    }, [dispatch, dataSearchURL])
    
    
    const dataSearch = useAppSelector(state => state.dataSearch.data)
    const title = dataSearch?.title;
    const description =dataSearch?.description;

    return ( 
        <div className="main-container">
            {
                !expandToggle &&
                <div>
                    <h1>{ title }</h1>
                    <hr className="hr-left" />
                    <p>{ description }</p>
                </div>
            }
           <div className={expandToggle ? `feature-container expand` : `feature-container`}>
                <ExpandToggle
                    expandToggle={ expandToggle }
                    handleExpandToggle={ handleExpandToggle }
                />
                <LaunchList expandToggle={expandToggle} />
           </div>
        </div>
    );
}
 
export default DataSearch;