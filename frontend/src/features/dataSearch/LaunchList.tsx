import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { handleInput, handleSelect } from "../../hooks/useHandleForm";

const LaunchListItem = React.lazy(() => import("./LaunchListItem"))

const LaunchList = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filter, setFilter] = useState("oldest");
    const [resultCount, setResultCount] = useState(0);

    return (
        <>
        <Form className="searchbar">
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter keywords"
                    value={searchInput}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e, setSearchInput)}
                />
                <Form.Select
                    value={filter}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelect(e, setFilter)}
                    >
                    <option value="oldest">Oldest</option>
                    <option value="latest">Latest</option>
                    <option value="successful">Successful</option>
                    <option value="failed">Failed</option>
                </Form.Select>
            </Form.Group>
        </Form>
        <div>
            {
                resultCount === 0 ? <p>No Results</p> : resultCount === 1 ? <p>{ resultCount } result</p> : <p>{ resultCount } results</p>
            }
        </div>
        <div id="launches">
            <ul>
                <React.Suspense fallback='Loading...'>
                    <LaunchListItem searchInput={searchInput} filter={filter} setResultCount={setResultCount} />
                </React.Suspense>
            </ul>
        </div>
        </>
    );
};

export default LaunchList;
