import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//import PostCard from 'components/PostCard.jsx';
import CollectCard from 'components/CollectCard.jsx';
import {Card, CardDeck , Container, Row, Col, CardColumns}from 'react-bootstrap';
import {getCollect} from 'api/collect.js';
import './Mycollection.css';
export default class Mycollection extends React.Component{

    constructor(props){
        super(props)
        this.state={
          datas:[]
        }
        setInterval(() => {
          var titles=[]
          var categorys=[]
          var data=[]
          var prices = []
          var experiences=[]
          var id=[]
          getCollect(this.props.userId)
          .then(res=>{

            res.data.forEach((data)=>{

              titles.push(data.title);
              categorys.push(data.category);
              prices.push(data.price);
              experiences.push(data.experience);
              id.push(data.id);
            })
            for(var i=0;i<titles.length;i++)
            {
              data.push({
                img: `images/guitar.jpg`,
                title:titles[i],
                category:categorys[i],
                price:prices[i],
                experience:experiences[i],
                id:id[i]
              })
            }

          }).then(res=>{
            this.setState({
              datas:data
            })


          })
        }, 1000);
    }
    componentDidMount(){
      var titles=[]
      var categorys=[]
      var data=[]
      var prices = []
      var experiences=[]
      var id=[]
      console.log(this.props.userId,'enter');
      // getCollect(this.props.userId).then(res => {
      //     console.log(res.data);
      // })
      // .catch(e => {
      //     console.log(e)
      //   }
      // );

      //console.log(this.state.datas,'enter collection');

      getCollect(this.props.userId)
      .then(res=>{

        res.data.forEach((data)=>{

          titles.push(data.title);
          categorys.push(data.category);
          prices.push(data.price);
          experiences.push(data.experience);
          id.push(data.id);
        })
        for(var i=0;i<titles.length;i++)
        {
          data.push({
            img: `images/guitar.jpg`,
            title:titles[i],
            category:categorys[i],
            price:prices[i],
            experience:experiences[i],
            id:id[i]
          })
        }

      }).then(res=>{
        this.setState({
          datas:data
        })


      })
      console.log('out');
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
          return <CollectCard userId={this.props.userId} data={d} key={id}/>
        })
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
