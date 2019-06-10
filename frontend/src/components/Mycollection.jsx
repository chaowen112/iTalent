import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//import PostCard from 'components/PostCard.jsx';
import PostCard from 'components/PostCard.jsx';
import {Card, CardDeck , Container, Row, Col, CardColumns}from 'react-bootstrap';
import {getCollect} from 'api/collect.js';
import './Mycollection.css';
export default class Mycollection extends React.Component{

    constructor(props){
        super(props)
        this.state={
          datas:[]
        }
        
    }
    componentDidMount(){
      getCollect(this.props.userId)
      .then(r=>{this.setState({datas:r.data})});
      
    }
    render(){

        // let cards = this.state.datas.map(d => {
        //     return (
        //     <Card className="m-2" key={d.key} style={{width: "200px"}}>
        //         <Card.Img style={{width:'150px',height:'150px',borderRadius:'50%',marginLeft:'22px',marginTop:'10px',border:'solid 5px #eee'}} src={d.img}/>
        //         <Card.Body style={{textAlign: "center"}}>
        //             <Card.Title>{d.title}</Card.Title>
        //             <Card.Text>{d.text}</Card.Text>
        //             <Card.Text>價錢:{d.price}</Card.Text>
        //         </Card.Body>
        //         <Card.Footer>
        //             <small className="text-muted">Last updated on {d.updated}</small>
        //         </Card.Footer>
        //     </Card>)
        // });
        let cards = this.state.datas.map( (d, id) => {
          return <PostCard userId={this.props.userId} postData={d} key={id} userData={this.props.userId}/>
        })
        //console.log(cards)

        return(
        <Container>
            <h1 className="title"></h1>
            <div className="d-flex flex-row flex-wrap">
              <CardDeck style={{flexFlow: "row nowrap", margin: "10px 0", width: "100%"}}>
                {cards}
              </CardDeck>
            </div>
        </Container>);
    }
}
