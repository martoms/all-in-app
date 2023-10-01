import { useState } from 'react';

const useExpandToggle = () => {
    
    const [expandToggle, setExpandToggle] = useState(false);

    const handleExpandToggle = () => {
       if (expandToggle === false) setExpandToggle(true);
       if (expandToggle === true) setExpandToggle(false);
    }

    return { expandToggle, setExpandToggle, handleExpandToggle }
}
 
export default useExpandToggle;