import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown} from 'reactstrap';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';
import Wellcome from 'components/Wellcome.jsx';
import Artist from 'components/Artist.jsx';
import Login from 'components/Login.jsx';
import Account from 'components/Account.jsx';
import PostForm from 'components/PostForm.jsx';
import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: 'metric',
            navbarToggle: false,
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
    }

    render() {
        return (
            <Router>

                <div className={`main bg-faded ${this.state.group}`}>
                    <div className='container'>

                        <Navbar color="faded" light toggleable>
                            <NavbarBrand className='text-info' href="/">iTalents</NavbarBrand>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink id="register" left onClick={this.handleNavbarToggle} tag={Link} to='/register' >Register</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="artist_position" left onClick={this.handleNavbarToggle} tag={Link} to='/artist'>Artist</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink left onClick={this.handleNavbarToggle} tag={Link} to='/account'>Account</NavLink>
                                    </NavItem>
                                </Nav>
                        </Navbar>
                    </div>

                    <Route exact path="/" render={() => (
                        <Wellcome/>
                    )}/>
                    <Route exact path="/register" render={() => (
                        <Today  />
                    )}/>
                   <Route exact path="/login" render={() => (
                        <Login />
                    )}/>
                    <Route exact path="/artist" render={() => (
                        <Artist/>
                    )}/>
                    <Route exact path="/testing" render={() => (
                        <Testing/>
                    )}/>
                    <Route exact path="/account" render={() => (
                        <Account/>
                    )}/>
                    <Route exact path="/upload" render={() => (
                        <PostForm/>
                    )}/>
                </div>
            </Router>
        );
    }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }
    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    handleUnitChange(unit) {
        this.setState({
            unit: unit
        });
    }
}
