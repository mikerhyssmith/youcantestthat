import React, { FunctionComponent } from "react";

import "./Search.scss";

export interface ISearchProps {
}


export const Search: FunctionComponent = () => {

    const handleSearch = () => { }

    return (
        <div className="search-container">
            <input className="search" type="text" placeholder="Search" onChange={handleSearch} />
        </div>

    )
}