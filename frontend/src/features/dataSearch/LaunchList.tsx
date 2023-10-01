import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { handleInput, handleSelect } from "../../hooks/useHandleForm";

const LaunchListItem = React.lazy(() => import("./LaunchListItem"))

const LaunchList = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filter, setFilter] = useState("oldest");

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
        <div id="launches">
            <ul>
                <React.Suspense fallback='Loading...'>
                    <LaunchListItem searchInput={searchInput} filter={filter} />
                </React.Suspense>
            </ul>
        </div>
        </>
    );
};

export default LaunchList;
