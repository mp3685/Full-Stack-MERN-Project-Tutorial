import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });
//const API = axios.create({ baseURL: 'https://projectname.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    //console.log(req.headers);

    return req;
});

//const url = 'http://localhost:5000/posts';
//const url = 'https://projectname.herokuapp.com/posts';

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);