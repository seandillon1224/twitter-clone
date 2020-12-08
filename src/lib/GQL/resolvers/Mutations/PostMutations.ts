import ResolverMap from "../types";
import { IPost } from "lib/models/post";

const PostMutations: ResolverMap = {
  async addPost(_, args, { Post, User }): Promise<IPost> {
    const { input } = args;
    try {
      const res: IPost = await Post.create({...input, createdAt: new Date()});
      await User.findOneAndUpdate(input.user, {$push: {'posts': res._id}});
      return res;
    } catch (err) {
      throw new Error("An error occurred creating a post");
    }
  },
};

export default PostMutations;
