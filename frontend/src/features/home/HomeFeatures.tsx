import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchFeatures } from "./homeSlice";


const HomeFeatures = () => {

    const features = useAppSelector(state => state.home.homeFeatures)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFeatures())
    }, [dispatch])
    
    const featureItems = features?.filter(feature => feature.isFeatured)?.map(feature => {
        
        const {
            _id,
            title
        } = feature;

        return (
            <li key= { _id }>
                { title }
            </li>
        )
    })

    return featureItems;
}
 
export default HomeFeatures;