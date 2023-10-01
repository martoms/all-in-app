import React from 'react';
import expand from '../images/expand.svg';
import contract from '../images/contract.svg';

type ExpandToggleProp = {
    expandToggle: boolean;
    handleExpandToggle: () => void;
}

const ExpandToggle: React.FC<ExpandToggleProp> = ({ expandToggle, handleExpandToggle }) => {
    return ( 
        <div className="expand-toggle">
            {
                expandToggle ?
                <img
                    src={contract}
                    alt="contract"
                    onClick={handleExpandToggle}
                />
                :
                <img
                    src={expand}
                    alt="expand"
                    onClick={handleExpandToggle}
                />
            }
            
        </div>
    );
}
 
export default ExpandToggle;