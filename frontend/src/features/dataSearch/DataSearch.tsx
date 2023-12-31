import DataSearchHeader from './DataSearchHeader';
import LaunchList from './LaunchList';
import ExpandToggle from '../../components/ExpandToggle';
import useExpandToggle from '../../hooks/useExpandToggle';

const DataSearch = () => {

    const { expandToggle, handleExpandToggle } = useExpandToggle();
    
    return ( 
        <div className="main-container">
            { !expandToggle && <DataSearchHeader /> }
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