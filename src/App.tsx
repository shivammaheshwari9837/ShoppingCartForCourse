import React from 'react';
import { Provider } from 'react-redux';
// import './components/FontAwesomeIcons';
import './App.css';
import Header from './components/HomePage/Header';
import HomeIndex from './components/HomePage/HomeIndex';
import store from './Redux/store';
import {Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './components/FullCouseDetail/MainPage';
import WishList from './components/WishListComponent/WishList';
import Cart from './components/CartDetail/Cart';
import MainProfile from './components/Profile/MainProfile';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store = {store}>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={HomeIndex}></Route>
              <Route exact path="/courseDetail/:id" component={MainPage}></Route>
              <Route exact path="/wishlist" component={WishList}></Route>
              <Route exact path="/cartlist" component={Cart}></Route>
              <Route exact path="/profile" component={MainProfile}></Route>
            </Switch>
          </Router>
        </Provider>
      </header>
    </div>
  );
}

export default App;
