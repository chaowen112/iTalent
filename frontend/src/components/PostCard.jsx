import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import {Card, CardDeck , Container, Row, Col, CardColumns, Button,ButtonGroup}from 'react-bootstrap';
//import './Recommend.css';
import {newPost,getHot, post} from 'api/post.js';
import {addCollect,getCollect} from 'api/collect.js';
import {getUserData} from '../api/user.js';
import PostModal from 'components/PostModal.jsx';
import Post from 'components/Post.jsx';
import './PostCard.css';
import uuid from 'uuid/v4';
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
            disabled: false,
            userId:''
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.addCollection = this.addCollection.bind(this);


    }
    componentDidMount(){
      //console.log(typeof(this.props.userId),'enter postcard');

    }


    render(){

      let img = <img src={`${this.props.userData.photo}`} alt="photo" onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://source.unsplash.com/500x500/?sing,dance"
    }} />
      var cardStyle = {boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)", minWidth: '200px'}
      return(
      <div>
          <hr/>
          <hr/><Card  onClick={this.openModal} style={cardStyle}>
                  {img}
                  <Card.Body style={{textAlign: 'center'}}>
                        <Card.Title >Title: {this.props.postData.title}</Card.Title>
                        <Card.Text>Detail: {this.props.postData.detail}</Card.Text>
                        <Card.Text>$: {this.props.postData.price}</Card.Text>
                        <Button onClick={this.addCollection} variant={this.state.disabled ?"outline-secondary" :"outline-dark"} disabled={this.state.disabled}   >收藏</Button>
                  </Card.Body>
              </Card>
              <PostModal onHide={this.closeModal} show={this.state.isModalShow} postData={this.props.postData} userId={this.props.userId}/>

      </div>
      );

    }
    addCollection(){
        //console.log('add');

        console.log(this.state.userId,'enter');
          var userid = 123;
          var titles=[]
          var categorys=[]
          var data=[]
          var prices = []
          var experiences=[]
          let cards

            addCollect(this.props.userId,this.props.data.title, '演員/女演員', 1, this.props.data.price, false, 'detail', ' ')

              this.setState({
                disabled:true
              })


    }

    openModal(){
        console.log('open modal')
        this.setState({isModalShow: true});
        post('api/posts/view', {postId: this.props.postData.id})
        .then(r=>console.log('add view count'))
        .catch(e=>{console.log(e)});
    }

    closeModal(e){
        e.stopPropagation();
        this.setState({isModalShow: false})
    }


}
