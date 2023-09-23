import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxSelectors'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchFeatures } from "./homeSlice";


const HomeFeatures = () => {

    const features = useAppSelector(state => state.home.homeFeatures)
    const error = useAppSelector(state => state.home.error)
    const loading = useAppSelector(state => state.home.loading)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchFeatures())
    }, [dispatch])
    
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