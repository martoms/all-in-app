import DataSearchHeader from "./DataSearchHeader";
import ExpandToggle from "../../components/ExpandToggle";
import useExpandToggle from "../../hooks/useExpandToggle";
import LaunchItemDetails from "./LaunchItemDetails";

const LaunchItemPage = () => {

    const { expandToggle, handleExpandToggle } = useExpandToggle();
    
    return ( 
        <div className="main-container">
            { !expandToggle && <DataSearchHeader /> }
            <div className={expandToggle ? `feature-container expand` : `feature-container`}>
                <ExpandToggle
                    expandToggle={ expandToggle }
                    handleExpandToggle={ handleExpandToggle }
                />
                <LaunchItemDetails />
            </div>
        </div>
    );
}
 
export default LaunchItemPage;