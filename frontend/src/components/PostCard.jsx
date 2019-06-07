import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import {Card, CardDeck , Container, Row, Col, CardColumns, Button}from 'react-bootstrap';
import './Recommend.css';
import {newPost,getHot,addCollect} from 'api/post.js';
import PostModal from 'components/PostModal.jsx';
import Post from 'components/Post.jsx';
import { $$asyncIterator } from 'iterall';
export default class PostCard extends React.Component{

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
            colletion_title:''
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.addCollection = this.addCollection.bind(this);


    }



    render(){

     //console.log(this.props.data);

      let title=this.props.data.title;
      let price=this.props.data.price;
      let img = this.props.data.img;
      var cardStyle = {boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)", minWidth: '200px'}
      return(
      <div>
          <hr/>

          <hr/>


              <Card onClick={this.openModal}  style={cardStyle}>
                  <Card.Img className="carding" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '22px', marginTop: '10px', border:'solid 5px #17a3b873'}} variant="top" src={img}/>
                  <Card.Body style={{textAlign: 'center'}}>
                        <Card.Title >{title}</Card.Title>

                        <Card.Text>{price}</Card.Text>
                        <Button onClick={this.addCollection}>add</Button>
                  </Card.Body>
              </Card>


      </div>
      );

    }
    addCollection(){
        //console.log('add');
        var userid = 123;
        addCollect(userid,this.props.data.title, '演員/女演員', 1, this.props.data.price, false, 'detail', ' ');
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
      var width = el.scrollLeft() + 230;
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
      var width = el.scrollLeft() - 230;
      var remove_hi = el.parent().next().children('.highlight');
      var add_hi = remove_hi.prev();
      if (add_hi.length === 1) {
        remove_hi.removeClass("highlight");
        add_hi.addClass("highlight");
      }
      el.animate({scrollLeft: width}, 500, 'swing', () => {});
    }
}
