import React from 'react';
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
        super(props)
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
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}
