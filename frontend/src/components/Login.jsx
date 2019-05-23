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
import './Login.css';
export default class Wellcome extends React.Component{

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render(){

        const carousel_title={
            color: 'black'
        };
        const carousel_second_title={
            color: 'black'
        };
        return(
          <Router>
              <div>
                  <Sidebar
                  sidebar={<div>
                              <button className="button1">訂單</button>
                              <br></br>
                              <button className="button1">收件匣</button>
                              <br></br>
                              <button className="button1">評鑑</button>
                              <br></br>
                              <button className="button1" tag={Link} to='/mycollection'>我的收藏</button>
                              <br></br>
                              <button className="button1">個人資料</button>
                           </div>



                  }

                  open={this.state.sidebarOpen}
                  onSetOpen={this.onSetSidebarOpen}
                  styles={{ sidebar: { background: "white" ,width:200} }}
                  docked={true}
                >
                  

                </Sidebar>
                <Route exact path="/mycollection" render={() => (
                            <Mycollection/>
                )}/>

            </div>
        </Router>
       );

    }
}
