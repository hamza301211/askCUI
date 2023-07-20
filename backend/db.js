import mongoose from "mongoose";

const url =
  "mongodb+srv://umair:umair@blog.ne0ye.mongodb.net/BLOG?retryWrites=true&w=majority";
const connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
export default connect;
