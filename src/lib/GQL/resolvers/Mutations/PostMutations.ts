import ResolverMap from "../types";
import { IPost } from "lib/models/post";

const PostMutations: ResolverMap = {
  async addPost(_, args, { Post }): Promise<IPost> {
    try {
      const { input } = args;
      const res: IPost = await Post.create(input);
      return res;
    } catch (err) {
      throw new Error("An error occurred creating a post");
    }
  },
};

export default PostMutations;
