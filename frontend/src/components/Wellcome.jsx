import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
import Recommend from './Recommend.jsx'
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

        <div className="wellcome">
        

            <Container>
                <Row>
                    <Col>
                        <Recommend title="Recommended Artists"/>
                        <Recommend title="Recommended Artists"/>
                        <Recommend title="Recommended Artists"/>
                    </Col>
                </Row>
            </Container>
        <footer className="container-fluid fh5co-footer" id="id_footer">
            <div className="container" >

                    <div className="col-lg-5" >


                        <p>
                            <span className="email"><img src={`images/emails.png`}
                                    alt="email icon" /></span><b>chaowen.nthu@gmail.com</b>

                            <span className="phone"><img src="images/phone.png" alt="phone icon" /></span><b>+886-931-875-878</b>
                        </p>

                        <ul className="navbar-nav float-left social-links footer-social">


                            <li className="nav-item"><a href="http://www.google.com" >facebook</a> <a href="http://www.google.com">instagram</a>
                            </li>
                            <li className="nav-item"><span>copyright</span>
                            </li>



                        </ul>

                    </div>



            </div>
       </footer>
       </div>

       );

    }
}
