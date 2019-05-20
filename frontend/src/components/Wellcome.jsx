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
                        <Carousel className={`d-block w-100`}>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100`}
                                    src={`images/React-icon.png`}
                                    alt="React"
                                />
                                <Carousel.Caption>
                                    <h2 style={carousel_title}>Find Artisians?</h2>
                                    <p style={carousel_second_title}>Here is the right place</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={`d-block w-100`}
                                    src={`images/React-icon.png`}
                                    alt="React"
                                />
                                <Carousel.Caption>
                                    <h2 style={carousel_title}>Find Artisians?</h2>
                                    <p style={carousel_second_title}>Here is the right place</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}
