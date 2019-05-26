import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown} from 'react-bootstrap';

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

import Wellcome from 'components/Wellcome.jsx';
import Artist from 'components/Artist.jsx';
import Login from 'components/Login.jsx';
import Account from 'components/Account.jsx';
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
                                        <NavLink style={{position:'absolute',left:'750px',top:'10px'}} left onClick={this.handleNavbarToggle} tag={Link} to='/register' >Register</NavLink>
                                    </NavItem>
                                    <NavItem style={{position:'absolute',left:'200px',top:'10px'}}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                          Category
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">音樂</Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">運動</Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">學業</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{position:'absolute',left:'560px',top:'10px'}} left onClick={this.handleNavbarToggle} tag={Link} to='/artist'>Artist</NavLink>
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


                    <Route exact path="/artist" render={() => (
                        <Artist/>
                    )}/>

                    <Route exact path="/account" render={() => (
                        <Account/>
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
