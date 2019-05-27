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
        <div className="container">
        <br/>
      	<div className="row justify-content-center">
                              <div className="col-12 col-md-10 col-lg-8">
                                  <form className="card card-sm" style={{margin:'auto',width:'80%'}}>
                                      <div className="card-body row no-gutters align-items-center" >

                                          <div className="col">
                                              <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
                                              </input>
                                          </div>

                                          <div className="col-auto">
                                              <button className="btn btn-lg btn-success" type="submit">Search</button>
                                          </div>

                                      </div>
                                  </form>
                              </div>

                          </div>
      </div>

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
                            <span className="email"><img style={{width: '20px'}} src={`images/emails.png`}
                                    alt="email icon" /></span><b>chaowen.nthu@gmail.com</b>

                                <span className="phone"><img style={{ width: '20px' }} src="images/phone.png" alt="phone icon" /></span><b>+886-931-875-878</b>
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
