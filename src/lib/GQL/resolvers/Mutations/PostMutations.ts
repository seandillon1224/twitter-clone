import ResolverMap from "../types";
import { IPost } from "lib/models/post";
import { IUser } from "lib/models/user";

const PostMutations: ResolverMap = {
  async addPost(_, args, { Post, User }): Promise<IPost> {
    console.log(args)
    try {
      const { input } = args;
      const res: IPost = await (await Post.create(input)).populate('User')
      const userRes: IUser = await User.update(
         { _id : args.user }, 
         {$addToSet: { posts: 'res._id' } 
      })
      return res;
    } catch (err) {
      throw new Error("An error occurred creating a post");
    }
  },
};

export default PostMutations;
