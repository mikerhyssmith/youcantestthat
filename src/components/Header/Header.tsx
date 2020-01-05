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
                <h1 className="header__page-title">🧪 You can test that 🧪</h1>
                <h4 className="header__page-sub-title">Recipes for testing the web</h4>
            </header>
        );
    }
}

export default Header;