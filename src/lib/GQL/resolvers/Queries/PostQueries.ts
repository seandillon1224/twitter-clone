import ResolverMap from "../types";
import { IPost } from "lib/models/post";

const PostQueries: ResolverMap = {
  async allPosts(_, __, { Post }) {
    try {
      const posts: IPost[] | null = await Post.find().populate('user');
      return posts || [];
    } catch (err) {
      throw new Error("An error occurred fetching posts");
    }
  },
};

export default PostQueries;