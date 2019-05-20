import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Recommend extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="Recommend">
            <h1 className="justify-content">{this.props.title}</h1>
        </div>);
    }
}