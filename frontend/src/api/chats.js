import axios from 'axios';

export function getChat(roomkey) {

  return axios.post('/api/chats', {
    roomkey: roomkey
  }).then((res) => {
    return res.data;
  }).catch(e => {
    console.log(e);
  })
}

export function newChat(owner, text, updated, roomkey) {
  return axios.post('/api/chats/new', {
    owner,
    text,
    updated,
    roomkey
  }).then(async () => {
    // console.log('success');
    return getChat(roomkey);
  }).catch(e => {
    console.log(e);
  })
}