import axios from 'axios';

export function getUserData(id){
    axios.get('/api/user/data', {
        params: {
            id: id
        }
    })
    .then(res => {return res;})
    .catch(e => console.log(e));
}