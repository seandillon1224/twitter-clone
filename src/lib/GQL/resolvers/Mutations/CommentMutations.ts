import ResolverMap from "../types";
import { IComment } from "lib/models/comment";

const CommentMutations: ResolverMap = {
  async addComment(_, args, { Comment }): Promise<IComment> {
    const { input } = args;
    try {
      const res: IComment = await Comment.create({...input, createdAt: new Date()});
      return res;
    } catch (err) {
      throw new Error("An error occurred creating a comment");
    }
  },
};

export default CommentMutations;
