import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  username: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: false,
  },
  createdDate: {
    type: Date,
  },
});

const Post = mongoose.model("post", PostSchema);

export default Post;
