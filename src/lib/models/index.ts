import Post from "./post";
import User from "./user";
import Comment from "./comment";

export interface Context {
  Post: typeof Post;
  User: typeof User;
  Comment: typeof Comment;
}

export default {
  Post,
  User,
  Comment,
};
