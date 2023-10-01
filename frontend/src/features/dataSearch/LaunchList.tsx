import React, { ChangeEvent } from "react";
import { useState } from "react";

const LaunchListItem = React.lazy(() => import("./LaunchListItem"))

const LaunchList = () => {

    const [searchInput, setSearchInput] = useState("");

    // Get input value
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
        <form className="searchbar">
            <input
                type="text"
                placeholder="Enter keywords"
                value={searchInput}
                onChange={handleInputChange}
            />
        </form>
        <div id="launches">
            <ul>
                <React.Suspense fallback='Loading...'>
                    <LaunchListItem searchInput={searchInput} />
                </React.Suspense>
            </ul>
        </div>
        </>
    );
};

export default LaunchList;
