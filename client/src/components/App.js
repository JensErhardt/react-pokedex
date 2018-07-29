import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Secret from './Secret';
import Login from './Login';
import Signup from './Signup';
import api from '../api';
import logo from '../logo.svg';
import './App.css';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import PokemonList from './PokemonList';




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
    }
    api.loadUser();

  }

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open,
    })
  }


  componentDidMount() {
    api.getPokemon()
      .then(pokemon => {
        console.log("DEBUG api pokemon", pokemon)
        this.setState({
          pokemon: pokemon,
        })
      })
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {

    return (
      <div className="App">

        <div className="top-bar" />

        {/* <Link to="/">Home</Link>
        {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
        {!api.isLoggedIn() && <Link to="/login">Login</Link>}
        {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
        <Link to="/secret">Secret</Link>
        <Link to="/pokemon">Pokemon</Link> */}
        {/* <Switch>
          <Route path="/" exact component={PokemonList}/>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch> */}

        <PokemonList pokemon ={this.state.pokemon} />

      </div>
    );
  }
}

export default App;
