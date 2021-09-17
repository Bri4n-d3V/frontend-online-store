import React from 'react';
import Categories from '../components/Categories';

export default class Home extends React.Component {
  render() {
    return (
      <main data-testid="home-initial-message">
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <Categories />
      </main>
    );
  }
}
