// import React from "react";
// import { useState } from "react";

// const ListItem = React.lazy(() => import("./ListItem"))

const LaunchList = () => {
    // const [searchInput, setSearchInput] = useState("");

    // Get input value
    // const handleInputChange = (e) => {
    //     setSearchInput(e.target.value);
    // };

    return (
        <>
        {/* <form>
            <input
                type="text"
                placeholder="Enter keywords"
                value={searchInput}
                onChange={handleInputChange}
            />
        </form> */}
        <div id="launches">
            <ul>
                {/* <React.Suspense fallback='Loading...'>
                    <ListItem searchInput={searchInput} />
                </React.Suspense> */}
            </ul>
            {/* <p className="fetch-end">No more data is fetched</p> */}
        </div>
        </>
    );
};

export default LaunchList;
