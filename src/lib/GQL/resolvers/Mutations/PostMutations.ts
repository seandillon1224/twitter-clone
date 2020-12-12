import ResolverMap from "../types";
import { IPost } from "lib/models/post";
import { IUser } from "lib/models/user";

const PostMutations: ResolverMap = {
  async addPost(_, args, { Post, User }): Promise<IPost> {
    console.log(args)
    try {
      const { input } = args;
      let post: IPost | null = await  Post.create(input)
      post = await post.populate('user').execPopulate()
      
      // Use add to set instead, push allows duplicates
      const userRes: IUser | null = await User.findOneAndUpdate(input.user, {$addToSet: {'posts': post._id}});
      
      return post;
    } catch (err) {
      console.log(err)
      throw new Error("An error occurred creating a post");
    }
  },

  async editPost(_, args, { Post}): Promise<IPost> {
    try {
      const { input, postId } = args;
      const post: IPost | null = await Post.findOne(postId, input)

      return post
    } catch(err) {
      throw new Error('An error occurred while editing the post')
    }
  },
  async deletePost(_, args, {Post}): Promise<IPost> {
    const {postId, userId} = args;
    const post: IPost | null = await Post.findByIdAndDelete(postId);
    // to-do 
    //1. Remove post from users array
    return post;

  }
};

export default PostMutations;
