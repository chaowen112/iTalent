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

import Mycollection from 'components/Mycollection.jsx';
import './Login.css';
export default class Wellcome extends React.Component{

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
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
                <Card body id="login_option">

                   <Button >個人資料</Button>
                </Card>
                <Card body className="text-center" id="login_option">

                   <Button tag={Link} to='/mycollection'>我的收藏</Button>
                </Card>
                <Card body className="text-center" id="login_option">

                   <Button >訂單記錄</Button>
                </Card>
                <Card body className="text-right" id="login_option">

                   <Button >登出</Button>
                </Card>
                
                <Route exact path="/mycollection" render={() => (
                    <Mycollection/>
                )}/>
            </div>


        </Router>
       );

    }
}
