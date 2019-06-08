import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import {Card, CardDeck , Container, Row, Col, CardColumns, Button}from 'react-bootstrap';
import './Recommend.css';
import {newPost,getHot,addCollect,getLatest,getMoney,getRecommend} from 'api/post.js';
import PostModal from 'components/PostModal.jsx';
import Post from 'components/Post.jsx';
import PostCard from 'components/PostCard.jsx';
import { $$asyncIterator } from 'iterall';
export default class Recommend extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isModalShow: false,
            Title:[],
            category:[],
            ts:[],
            by_hour:[],
            price:[],
            experience:[],
            dataAllocate:[],
            datas:[],
            colletion_title:'',
            hotData:null,
            latestData:'',
            cards:''

        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.addCollection = this.addCollection.bind(this);

    }


    render(){

      console.log(this.props.recommendData);

      let card = this.props.recommendData.map( (d, id) => {
        return <PostCard data={d} key={id}/>
      })



      return(
      <div>
          <hr/>
          <h1 className="title">{this.props.title}</h1>
          <hr/>
          <div className="d-flex justify-content-around align-items-center" style={{margin: "0"}}>
            <i className="fas fa-chevron-circle-left fa-3x arrow-btn" onClick={this.handleLeftScroll.bind(this)}></i>
            <Row className='justify-content-md-center scrollbar' style={{margin: "20px", maxWidth: "680px"}}>
              <CardDeck style={{flexFlow: "row nowrap", margin: "10px 0", width: "100%"}}>
                {card}
              </CardDeck>
            </Row>
            <i className="fas fa-chevron-circle-right fa-3x arrow-btn" onClick={this.handleRightScroll.bind(this)}></i>
          </div>
          <div className="circles">
            <i className="fas fa-circle highlight"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
          </div>

      </div>
      );

    }
    addCollection(){
        //console.log('add');
        var userid = 123;
        addCollect(userid,'title', '演員/女演員', 1, 100, false, 'detail', ' ');
    }
    openModal(){
        this.setState({isModalShow: true});
    }

    closeModal(e){
        e.stopPropagation();
        this.setState({isModalShow: false})
    }

    handleRightScroll(e) {
      var el = $(e.target).prev();
      var distance = parseInt($('.card').css('width').replace('px', '')) + 2 * parseInt($('.card').css('margin-left').replace('px', ''));
      var width = el.scrollLeft() + distance;
      var remove_hi = el.parent().next().children('.highlight');
      var add_hi = remove_hi.next();
      if (add_hi.length === 1) {
        remove_hi.removeClass("highlight");
        add_hi.addClass("highlight");
      }
      el.animate({scrollLeft: width}, 500, 'swing', () => {});
    }

    handleLeftScroll(e) {
      var el = $(e.target).next();
      var distance = parseInt($('.card').css('width').replace('px', '')) + 2 * parseInt($('.card').css('margin-left').replace('px', ''));
      var width = el.scrollLeft() - distance;
      var remove_hi = el.parent().next().children('.highlight');
      var add_hi = remove_hi.prev();
      if (add_hi.length === 1) {
        remove_hi.removeClass("highlight");
        add_hi.addClass("highlight");
      }
      el.animate({scrollLeft: width}, 500, 'swing', () => {});
    }
}
