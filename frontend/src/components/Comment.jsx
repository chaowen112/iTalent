import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Col, Row} from 'react-bootstrap';

export default class Comment extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Col>
                <Row>
                    <h1>Comment</h1>
                </Row>
            </Col>

        );
    }

}