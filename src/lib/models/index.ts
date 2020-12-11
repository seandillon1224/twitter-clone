import Post from "./post";
import User from "./user";
import Comment from "./comment";
import Settings from "./settings";

export interface Context {
  Post: typeof Post;
  User: typeof User;
  Comment: typeof Comment;
  Settings: typeof Settings;
}

export default {
  Post,
  User,
  Comment,
  Settings
};
