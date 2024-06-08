import express from 'express';
import { GetAllPosts, GetPost, CreatePost } from '../controllers/postController.js';


const Router = express.Router();

Router.get('/', GetAllPosts);

Router.get('/:id', GetPost);

Router.post('/submit', CreatePost)


export default Router;