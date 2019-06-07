import axios from 'axios';

export async function getUserData(id){
    try{ 
        let res = await axios.get('/api/user/data', {
            params: {
                id: id
            }
        })
        return res.data[0];
    } catch(err){
        console.log(err);
    }
}