import axios from 'axios';

export function addCollect(userid,title, category, experience, price, by_hour, detail, id)
{
  console.log('addcollect id:',id)
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
      //  alert('success');
   }).catch(e => {
       console.log(e);
       alert('fail!!');
   });
}
export function getCollect(userid)
{

  return axios.post('/api/collect/user',{
    userid:userid
  })
}
export function deleteCollect(userid,postid)
{
  console.log('enter 2',userid,postid);
  axios.post('/api/collect/delete', {
      userid:userid,
      postid: postid
  }).then(() => {
      //alert('success');
  }).catch(e => {
      console.log(e);
      alert('fail!!');
  });

}
