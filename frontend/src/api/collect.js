import axios from 'axios';

export function addCollect(userid,title, category, experience, price, by_hour, detail, id)
{

   axios.post('/api/posts/collect', {
       userid:userid,
       title: title,
       category: category,
       experience: experience,
       price: price,
       detail: detail,
       by_hour: by_hour,
       id: id
   }).then(() => {
       //alert('success');
   }).catch(e => {
       console.log(e);
       alert('fail!!');
   });
}

export function getCollect(){
  return axios.get('/api/collect/all')
}
