import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {
    Carousel, Container, Row, Col
} from 'react-bootstrap';
import './Wellcome.css';
import Button from 'react-bootstrap/Button'
// import React_icon from './img/React-icon.png';
import Recommend from './Recommend.jsx'
import { newPost, getHot } from 'api/post.js';
import { $$asyncIterator } from 'iterall';
export default class Wellcome extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          loading:false,
          dropdownOpen: false

        };

        this._validAuthStates = ['signedIn'];

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {

        const carousel_title = {
            color: 'black'
        };
        const carousel_second_title = {
            color: 'black'
        };
        return (

            <div className="wellcome">
                <div className="container">
                    <br />
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form /*className="card card-sm"*/ style={{ margin: 'auto', width: '80%'}}>
                                <div className=" row no-gutters align-items-center" >
                                    <div className="col">
                                        <input style={{fontFamily: "'Noto Sans TC', sans-serif"}} className="form-control form-control-lg" type="search" placeholder="藝人、才藝...">
                                        </input>
                                    </div>

                                    <div className="col-auto">
                                        <button onMouseOut={this.outMainbtn} onMouseOver={this.hoverMainbtn} style={{ marginLeft: "0.5rem", background: "#17a2b8", color: "#fff" }} className="btn btn-lg search-btn" type="submit">Search</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <Container>
                    <Row>
                        <Col>
                            <Recommend showId='hot' name={this.state.title} title="熱門" />
                            <Recommend title="最新" />
                            <Recommend title="推薦" />
                        </Col>
                    </Row>
                </Container>
                <div style={{background: "white", padding: "2rem"}}>
                    <div className="link d-flex flex-row justify-content-center align-items-center">
                        <span className="inline-border"></span>
                        <a href="#" title="Facebook"><i className="fab fa-facebook fa-2x m-2"></i></a>
                        <a href="#" title="Twitter"><i className="fab fa-twitter fa-2x m-2"></i></a>
                        <a href="#" title="Instagram"><i className="fab fa-instagram fa-2x m-2"></i></a>
                        <a href="#" title="Youtube"><i className="fab fa-youtube fa-2x m-2"></i></a>
                        <a href="#" title="Google Plus"><i className="fab fa-google-plus fa-2x m-2"></i></a>
                        <span className="inline-border"></span>
                    </div>
                    <div className="contact d-flex flex-column justify-content-center align-items-center m-2">
                        <div>
                            <span className="email"><i className="far fa-envelope"></i></span>
                            <b>chaowen.nthu@gmail.com</b>
                        </div>
                        <div>
                            <span className="phone"><i class="fas fa-phone"></i></span>
                            <b>+886-931-875-878</b>
                        </div>                    
                    </div>
                    <div style={{ color: "#17a2b8", textAlign: "center", marginTop: "2rem"}}>
                        <i class="far fa-copyright"></i> 2019 iTalent - All Rights Reserved
                    </div>
                </div>
            </div>
        );
    }

    hoverMainbtn(e) {
        $(e.target).css('background', "#14bbd4");
    }

    outMainbtn(e) {
        $(e.target).css('background', "#17a2b8");
    }

}
