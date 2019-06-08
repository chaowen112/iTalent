import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import PostCard from 'components/PostCard.jsx';
import {Card, CardDeck , Container, Row, Col, CardColumns}from 'react-bootstrap';
import {getCollect} from 'api/collect.js';
import './Mycollection.css';
export default class Recommend extends React.Component{

    constructor(props){
        super(props)
        this.state={
          datas:[]
        }
    }
    componentDidMount(){
      var titles=[]
      var categorys=[]
      var data=[]
      var prices = []
      var experiences=[]
      console.log('enter');
      getCollect()
      .then(res=>{

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
            title:titles[i],
            category:categorys[i],
            price:prices[i],
            experience:experiences[i]
          })
        }

      }).then(res=>{
        this.setState({
          datas:data
        })
        console.log(this.state.datas);

      })
      console.log('out');
    }
    render(){
        //console.log(this.props.datas);
        let data = [
            {
                key: 0,
                title: 'Andrew',
                text: 'I can play guitar',
                img: `images/guitar.jpg`,
                updated: '2019/05/18',
                score:8.5
            },
            {
                key: 1,
                title: 'Lawson',
                text: 'I can tell stories',
                img: `images/ballet.jpg`,
                updated: '2019/05/10',
                score:9.5
            },
            {
                key: 2,
                title: 'Andy',
                text: 'I can concour the universe',
                img: `images/piano.jpg`,
                updated: '2019/05/19',
                score:7
            },
            {
                key: 3,
                title: 'Tony',
                text: 'I can concour the universe',
                img: `images/piano.jpg`,
                updated: '2019/05/19',
                score: 7
            },
            {
                key: 4,
                title: 'Peter',
                text: 'I can concour the universe',
                img: `images/piano.jpg`,
                updated: '2019/05/19',
                score: 7
            },
        ]
        //console.log(data.length)

        let cards = this.state.datas.map(d => {
            return (
            <Card className="m-2" key={d.key} style={{width: "200px"}}>
                <Card.Img style={{width:'150px',height:'150px',borderRadius:'50%',marginLeft:'22px',marginTop:'10px',border:'solid 5px #eee'}} src={d.img}/>
                <Card.Body style={{textAlign: "center"}}>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.text}</Card.Text>
                    <Card.Text>價錢:{d.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated on {d.updated}</small>
                </Card.Footer>
            </Card>)
        });

        //console.log(cards)

        return(
        <Container>
            <h1 className="title">{this.props.title}</h1>
            <div className="d-flex flex-row flex-wrap">
                {cards}
            </div>
        </Container>);
    }
}
