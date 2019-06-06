import axios from 'axios';
import { ConsoleLogger } from '@aws-amplify/core';

export function getChatList(userId) {

  return axios.post('/api/chatlists', {
    userId: userId
  }).then((res) => {
    return res.data;
  }).catch(e => {
    console.log(e);
  })
}

export function updateChatList(roomkey, text, updated) {
  axios.post('/api/chatlists/update', {
    roomkey,
    text,
    updated
  }).then((res) => {
    
  }).catch(e => {
    console.log(e);
  })
}