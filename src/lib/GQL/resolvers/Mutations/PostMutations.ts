import ResolverMap from "../types";
import { IPost } from "lib/models/post";
import { IUser } from "lib/models/user";

const PostMutations: ResolverMap = {
  async addPost(_, args, { Post, User }): Promise<IPost> {
    console.log(args)
    try {
      const { input } = args;
      let post: IPost | null = await  Post.create(input)
      post = await post.populate('user')
      // Use add to set instead, push allows duplicates
      const userRes: IUser | null = User.findOneAndUpdate(input.user, {$addToSet: {'posts': post._id}});
      
      return post;
    } catch (err) {
      console.log(err)
      throw new Error("An error occurred creating a post");
    }
  },

  // async editMutation(_, args, { Post}): Promise<Ipost> {
  //     const { input, postId } = args;
  //     const res: IPost = await Post.findOn()

  //     return res
  // } 
};

export default PostMutations;
