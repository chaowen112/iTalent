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
        this.state={
            data:
            [
                {
                    username: 'Romeo',
                    text: 'i love u',
                    isReply: false,
                    date: '2018/04/12'
                },
                {
                    username: 'Juliate',
                    text: 'i love u too',
                    isReply: true,
                    date: '2018/04/13'
                }
            ]
        }
    }

    render(){
        let comments = this.state.data.map((c, it) => {
            return(
                <Row>
            <div key={it} style={{'marginLeft': c.isReply ? '50px': 0, display: 'block'}}>
                <p style={{'fontWeight': 'bold'}}>{c.username}</p>
                <p>{c.text}</p>
                <p>date: {c.date}</p>
            </div>
            </Row>
            )
        })
        return(
            <Col>
                {comments}
            </Col>

        );
    }

}