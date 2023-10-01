import { useState } from 'react';

const useExpandToggle = () => {
    
    const [expandToggle, setExpandToggle] = useState(false);
    const [expandHover, setExpandHover] = useState(false);

    const handleExpandToggle = () => {
       if (expandToggle === false) setExpandToggle(true);
       if (expandToggle === true) setExpandToggle(false);
    };

    const handleExpandHover = () => {
        setExpandHover(true);
    };

    const handleExpandUnHover = () => {
        setExpandHover(false);
    };

    return {
        expandToggle, setExpandToggle, handleExpandToggle,
        expandHover, setExpandHover, handleExpandHover, handleExpandUnHover
    }
}
 
export default useExpandToggle;