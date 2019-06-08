import axios from 'axios';

export function newPost(userid,title, category, experience, price, by_hour, detail, id){
  // TODO insert to database
   //console.log('truly enter');
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

}
export function getRecommend()
{
  return axios.get('/api/posts/recommend')
}
export function getLatest()
{
  return axios.get('/api/posts/latest')
}


export function postMoney(userid,money)
{
   console.log('enter getmoney')
   axios.post('/api/post/money', {
       userid:userid,
       money:money
   }).then(() => {
       alert('success');
   }).catch(e => {
       console.log(e);
       alert('fail!!');
   });
}
export function getMoney(userid){
  //console.log(userid,'user');

  return axios.post('/api/get/money',{
    userid:userid

  })
}
