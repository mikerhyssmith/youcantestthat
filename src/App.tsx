import React from 'react';
import { Grid, Cell } from "styled-css-grid";
import './App.scss';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid
        height="100%"
        columns={"1fr 1fr 200px"}
        rows={"100px 1fr 45px"}
        areas={[
          "header header  header",
          "content   content ads   ",
          "footer footer  footer"
        ]}>
        <Cell area="header">
          <Header />
        </Cell>
        <Cell area="content">Content</Cell>
        <Cell area="ads">Ads</Cell>
        <Cell area="footer">Footer</Cell>
      </Grid>
    </div>
  );
}

export default App;
