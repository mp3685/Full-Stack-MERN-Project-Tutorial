import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    //res.send('THIS WORKS!');
    try {
        const postMessages = await PostMessage.find();

        //console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    //res.send('Post Creation');
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        // https://www.resapitutorial.com/httpstatuscodes.html

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}