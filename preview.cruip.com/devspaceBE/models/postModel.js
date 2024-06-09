import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  title: String,
  content: String,
  author: String,
  description: String,
//   tags: [String],
//   images: String,
//   likes: {
//     type: [String],
//     default: []
//   },
//   comments: {
//     type: [String],
//     default: []
//   },

  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostModel = mongoose.model("PostModel", PostSchema);
export default PostModel;
