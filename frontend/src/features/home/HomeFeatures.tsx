import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxSelectors'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchFeatures } from "./homeSlice";


const HomeFeatures = () => {

    interface Feature {
        _id: string;
        title: string;
        route: string;
        isFeatured: boolean;
    }

    const features = useAppSelector(state => state.home.data) as Feature[]
    const error = useAppSelector(state => state.home.error)
    const loading = useAppSelector(state => state.home.loading)
    const dispatch = useAppDispatch()

    const url= import.meta.env.VITE_REACT_API_URL;
    
    useEffect(() => {
        dispatch(fetchFeatures(url))
    }, [dispatch, url])
    
    const featureItems = features?.filter(feature => feature.isFeatured)?.map(feature => {
        
        const {
            _id,
            title,
            route
        } = feature;

        return (

            <Link key= { _id } to={`/features/${route}`} className="feature-btn">
                <Button>
                    <li>
                        { title }
                    </li>
                </Button>
            </Link>
        )
    })

    return loading ? <li>Fetching Data...</li> : error ? <li>{error}</li> : featureItems;
}
 
export default HomeFeatures;