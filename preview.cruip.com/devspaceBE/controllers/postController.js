import mongoose from 'mongoose';
import PostMessage from '../models/postModel.js';

export const GetAllPosts = async (req, res) => {
  const { page } = req.query;
  console.log(req.query);

  try {
    const LIMIT = 4;
    // create a startindex to limit the number of posts. note convert page to number
    const startindex = (Number(page) - 1) * LIMIT;
    const total = await PostMessage.countDocuments({});

    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startindex);

    console.log('FETCH_ALL POSTS');
    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT)
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const GetPost = async (req, res) => {
   const { id } = req.params;
   console.log('This is req.params: ', req.params);
 
   try {
     const post = await PostMessage.findById(id);
     res.status(200).json(post);
   } catch (error) {
     console.log(error);
     res.status(404).json({ message: error });
   }
 };

 export const CreatePost = async (req, res) => {
   const post = req.body;
   console.log(post);
 
   const newPost = new PostMessage({
     ...post,
     creator: req.userId,
     createdAt: new Date().toISOString()
   });
 
   try {
     await newPost.save();
     // console.log(newPost)
     res.status(200).json(newPost);
   } catch (error) {
     console.log(error);
     res.status(409).json({ message: error.message });
   }
 };