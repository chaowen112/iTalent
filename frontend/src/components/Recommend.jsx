import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import {Card, CardDeck , Container, Row, Col, CardColumns, Button}from 'react-bootstrap';
import './Recommend.css';
import {newPost,getHot} from 'api/post.js';
import PostModal from 'components/PostModal.jsx';
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
            datas:[]
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.addCollection = this.addCollection.bind(this);


    }



    render(){
      var titles=[]
      var categorys=[]
      var data=[]
      var prices = []
      var experiences=[]
      let cards
      getHot().then(res=>{

        res.data.forEach((data)=>{

          titles.push(data.title);
          categorys.push(data.category);
          prices.push(data.price);
          experiences.push(data.experience);
        })
        for(var i=0;i<titles.length;i++)
        {
          data.push({
            img: `images/guitar.jpg`,
            text:titles[i],
            category:categorys[i],
            price:prices[i],
            experience:experiences[i]
          })
        }

      }).then(res=>{
           this.setState({
             datas:data
           })
        })
      cards = this.state.datas.map(d => {
           return (

           <Card onClick={this.openModal} key={d.key} style={{minWidth: '200px'}}>
               <Card.Text>{d.category}</Card.Text>
               <Card.Img className="carding" style={{width:'150px',height:'150px',borderRadius:'50%',marginLeft:'20px',marginTop:'10px',border:'solid 5px #eee'}} variant="top" src={d.img}/>
               <Card.Body style={{textAlign: 'center'}}>

                     <Card.Title >{this.props.name}</Card.Title>
                     <Card.Text>{d.text}</Card.Text>
                     <Card.Text>經驗：{d.experience}</Card.Text>
                     <Card.Text>{d.price}$</Card.Text>
                     <Button onClick={this.addCollection}>add</Button>
               </Card.Body>
              <PostModal onHide={this.closeModal} show={this.state.isModalShow}/>
           </Card>)
       });
      return(
      <div>
          <h1 className="title">{this.props.title}</h1>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <i className="fas fa-chevron-circle-left fa-3x arrow-btn" onClick={this.handleLeftScroll.bind(this)}></i>
            <Row className='justify-content-md-center scrollbar' style={{margin: "20px", maxWidth: "680px"}}>
              <CardDeck style={{flexFlow: "row nowrap", margin: "10px 0", width: "100%"}}>
                {cards}
              </CardDeck>
            </Row>
            <i className="fas fa-chevron-circle-right fa-3x arrow-btn" onClick={this.handleRightScroll.bind(this)}></i>
          </div>

      </div>
      );

    }
    addCollection(){
        console.log('add');
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
      el.animate({scrollLeft: width}, 500, 'swing', () => {});
    }

    handleLeftScroll(e) {
      var el = $(e.target).next();
      var width = el.scrollLeft() - 230;
      el.animate({scrollLeft: width}, 500, 'swing', () => {});
    }
}
