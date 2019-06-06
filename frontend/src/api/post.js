import axios from 'axios';

export function newPost(userid,title, category, experience, price, by_hour, detail, id){
  // TODO insert to database
   console.log('truly enter');
    axios.post('/api/posts/new', {
        userid:userid,
        title: title,
        category: category,
        experience: experience,
        price: price,
        detail: detail,
        by_hour: by_hour,
        id: id
    }).then(() => {
        alert('success');
    }).catch(e => {
        console.log(e);
        alert('fail!!');
    });
}

export function getHot()
{
  return axios.get('/api/posts/hot')
  var titles=[];
  var prices=[];
  var datas=[];

axios.get('/api/posts/hot')
 .then((res)=>{


    res.data.forEach((data)=>{
      titles.push(data.title);
      prices.push(data.price);
    })
    for(var i=0;i<titles.length;i++)
    {
      datas.push({
        img: `images/guitar.jpg`,
        text:titles[i],
        price:prices[i]
      })
    }
    console.log(datas);

 })
 .catch(e=>{
   alert('fail');
   console.log(e);
 })
 return datas;

}