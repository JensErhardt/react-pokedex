import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Countries from './Countries';
import AddCountry from './AddCountry';
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
  DropdownItem } from 'reactstrap';




class App extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      pokemon: [],
      collapsed: true,
    }
    api.loadUser();
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {
    let pokeList = [];
    api.getPokemon()
      .then(pokemon => {
        pokeList.push(pokemon)
        console.log("DEBUG pokeList", pokeList)
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


        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        




        {/* // <Link to="/">Home</Link> 
          // <Link to="/countries">Countries</Link> 
          // <Link to="/add-country">Add country</Link> 
          // {!api.isLoggedIn() && <Link to="/signup">Signup</Link> }
          // {!api.isLoggedIn() && <Link to="/login">Login</Link> }
          // {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link> }
          // <Link to="/secret">Secret</Link> 
          // <Link to="/pokemon">Pokemon</Link> */}

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
        <Home pokemon={this.state.pokemon} />


        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
