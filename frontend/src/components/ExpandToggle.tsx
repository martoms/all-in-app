import React from 'react';
import expand from '../images/expand.svg';
import expandHoverIcon from '../images/expand-hover.svg';
import contract from '../images/contract.svg';
import contractHoverIcon from '../images/contract-hover.svg';
import useExpandToggle from '../hooks/useExpandToggle';

type ExpandToggleProp = {
    expandToggle: boolean;
    handleExpandToggle: () => void;
}

const ExpandToggle: React.FC<ExpandToggleProp> = ({ expandToggle, handleExpandToggle }) => {

    const { expandHover, handleExpandHover, handleExpandUnHover } = useExpandToggle();

    return ( 
        <div className="expand-toggle">
            {
                expandToggle ?
                (
                    expandHover ?
                    <img
                        src={contractHoverIcon}
                        alt="contract"
                        onClick={handleExpandToggle}
                        onMouseOver={handleExpandHover}
                        onMouseLeave={handleExpandUnHover}
                    />
                    :
                    <img
                        src={contract}
                        alt="contract"
                        onMouseOver={handleExpandHover}
                        onMouseLeave={handleExpandUnHover}
                    />
                )
                :
                (
                    expandHover ?
                    <img
                        src={expandHoverIcon}
                        alt="expand"
                        onClick={handleExpandToggle}
                        onMouseOver={handleExpandHover}
                        onMouseLeave={handleExpandUnHover}
                    />
                    :
                    <img
                        src={expand}
                        alt="expand"
                        onMouseOver={handleExpandHover}
                        onMouseLeave={handleExpandUnHover}
                    />
                )
            }
            
        </div>
    );
}
 
export default ExpandToggle;