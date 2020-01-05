import React from 'react';
import { Grid, Cell } from "styled-css-grid";
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid
        height="100%"
        columns={"100px 1fr 100px"}
        rows={"45px 1fr 45px"}
        areas={[
          "header header  header",
          "menu   content ads   ",
          "footer footer  footer"
        ]}>
        <Cell area="header">Header</Cell>
        <Cell area="content">Content</Cell>
        <Cell area="menu">Menu</Cell>
        <Cell area="ads">Ads</Cell>
        <Cell area="footer">Footer</Cell>
      </Grid>
    </div>
  );
}

export default App;
