import React, { FunctionComponent } from "react";

import "./Arrow.scss";

export interface IArrowProps {
    onClick: (e: React.SyntheticEvent<HTMLDivElement>) => void;
}


export const Arrow: FunctionComponent<IArrowProps> = ({ onClick }) => {

    return (
        <div onClick={onClick} className="arrow-icon">
            <div className="arrow-head"></div>
        </div>

    )
}