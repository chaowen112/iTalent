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
import Emails from  'components/Emails.jsx';
import './Login.css';
export default class Login extends React.Component{

    constructor(props){
        super(props);
        //this.toggle = this.toggle.bind(this);
        this.state = {

          sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
    //toggle() {
      //  this.setState(prevState => ({
      //    dropdownOpen: !prevState.dropdownOpen
      //  }));
    //}

    render(){


        return(
          <Router>
              <div>
                  <Sidebar
                  sidebar={<div>
                              <button className="button1"><Link to='/booking'>訂單</Link></button>
                              <br></br>
                              <button className="button1"><Link to='/emails'>收件匣</Link></button>
                              <br></br>
                              <button className="button1">評鑑</button>
                              <br></br>
                              <button className="button1"> <Link to='/mycollection'>我的收藏</Link></button>
                              <br></br>
                              <button className="button1"><Link to='/personaldata'>個人資料</Link></button>
                           </div>



                  }

                  open={this.state.sidebarOpen}
                  onSetOpen={this.onSetSidebarOpen}
                  styles={{ sidebar: { background: "white" ,width:160,top:200,bottom:150} }}
                >
                <button className="button2" onClick={() => this.onSetSidebarOpen(true)}>
                  功能列
                </button>

                </Sidebar>
                <Route exact path="/booking" render={() => (
                            <Booking/>

                )}/>
                <Route exact path="/emails" render={() => (
                            <Emails/>

                )}/>
                <Route exact path="/mycollection" render={() => (
                            <Mycollection/>

                )}/>
                <Route exact path="/personaldata" render={() => (
                            <Personaldata/>

                )}/>

            </div>
        </Router>
       );

    }
}
