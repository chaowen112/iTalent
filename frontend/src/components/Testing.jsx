import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {
    Carousel, Container, Row, Col
} from 'react-bootstrap';
import './Wellcome.css';
// import React_icon from './img/React-icon.png';
import Sidebar from "react-sidebar";
import Mycollection from 'components/Mycollection.jsx';
import Personaldata from 'components/Personaldata.jsx';
import Booking from 'components/Booking.jsx';
import './Login.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
export default class Tesing extends React.Component{
  constructor(props){
      super(props);
      //this.toggle = this.toggle.bind(this);

  }
       render(){
         <SideNav
              onSelect={(selected) => {
                  // Add your code here
              }}
              console.log('testing');
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Line Chart
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
        </SideNav>
         }
}
