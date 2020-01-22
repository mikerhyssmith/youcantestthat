import React, { PureComponent } from 'react';

import "./Header.scss";

export interface IHeaderProps {
}

export interface IHeaderState {

}

class Header extends PureComponent<IHeaderProps, IHeaderState> {

    render() {
        return (
            <header className="header">
                <div className="header__page-title">🧪</div>
            </header>
        );
    }
}

export default Header;