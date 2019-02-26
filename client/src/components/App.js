import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
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
import Searchbar from './SearchBar';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      searchValue: ''
    }
    api.loadUser();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let searchValue = e.target.value.toUpperCase();
    this.setState({ searchValue })
  }

  componentDidMount() {
    api.getPokemon()
      .then(pokemon => {
        this.setState({
          pokemon: pokemon,
        })
      })
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {

    let filteredPokemon = this.state.pokemon
      .filter(pokemon => pokemon.name.toUpperCase().includes(this.state.searchValue.toUpperCase()))

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
      
        <Searchbar
          onChange={this.handleChange}
        />
        <PokemonList pokemon={filteredPokemon} />

      </div>
    );
  }
}

export default App;
