import express from 'express';
import { GetAllPosts, GetPost, CreatePost } from '../controllers/postController.js';


const Router = express.Router();

Router.get('/', GetAllPosts);

Router.get('/', GetPost);

Router.post('/', CreatePost)


export default Router;