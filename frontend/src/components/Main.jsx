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


                            <NavbarToggler left onClick={this.handleNavbarToggle}/>
                            <Collapse isOpen={this.state.navbarToggle} navbar >

                                <Nav navbar>
                                <UncontrolledDropdown>
                                  <DropdownToggle nav caret>
                                    Options
                                  </DropdownToggle>
                                  <DropdownMenu right>
                                    <DropdownItem>
                                      Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                      Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                      Reset
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>

                                    <NavItem>
                                        <NavLink tab={Link} to='/'>Talents</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/register'>Register</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/login'>Login</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/artist'>Artist</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>

                        </Navbar>
                    </div>

                    <Route exact path="/" render={() => (
                        <Wellcome/>
                    )}/>
                    <Route exact path="/register" render={() => (
                        <Today unit={this.state.unit} onUnitChange={this.handleUnitChange} />
                    )}/>
                    <Route exact path="/login" render={() => (
                        <Forecast unit={this.state.unit} onUnitChange={this.handleUnitChange} />
                    )}/>                    
                    <Route exact path="/artist" render={() => (
                        <Artist/>
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
