import BusinessList from '../Business/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import pizza from '../../src/img/pizza.png';
import './App.css';

const randomNum = Math.floor(Math.random() * 100);

const business = {
  image: pizza,
  name: 'Home made Pizza',
  city: 'Victoria',
  address: 'Douglas Street North',
  state: 'BC',
  zipCode: 'V0415',
  category: 'Italian',
  rating: '4.1',
  reviewCount: randomNum,
};

const businesses = [business, business, business, business, business, business];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
