import axios from 'axios';

export function newPost(title, category, experience, price, by_hour, detail, id){
    // TODO insert to database
    axios.post('/api/posts/new', {
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
        alert('fail');
    });
}