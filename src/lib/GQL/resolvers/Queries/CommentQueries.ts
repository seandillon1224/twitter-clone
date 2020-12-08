import ResolverMap from "../types";
import { IComment } from "lib/models/comment";

const CommentQueries: ResolverMap = {
  async allComments(_, __, { Comment }) {
    try {
      const posts: IComment[] | null = await Comment.find()
        .populate("user")
        .populate("post")
        .populate("comments");
      return posts || [];
    } catch (err) {
      throw new Error("An error occurred fetching comments");
    }
  },
};

export default CommentQueries;
