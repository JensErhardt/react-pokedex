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
  DropdownItem
} from 'reactstrap';
import { slide as Menu } from 'react-burger-menu'




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
      sidebarOpen: false,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    api.loadUser();

  }

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open,
    })
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

    let sidebarContent = <b>Sidebar content</b>;

    return (
      <div className="App">
      

  
  <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>





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
        {/* <Home pokemon={this.state.pokemon} /> */}


        {/* <Button color="danger">Danger!</Button> */}

      </div>
    );
  }
}

export default App;
