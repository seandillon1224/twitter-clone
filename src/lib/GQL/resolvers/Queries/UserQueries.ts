import ResolverMap from "../types";
import { IUser } from "lib/models/user";

const UserQueries: ResolverMap = {
  async allUsers(_, __, { User }): Promise<IUser[] | null> {
    try {
      const users: IUser[] | null = await User.find()
        .populate("comments")
        .populate("posts");
      return users || [];
    } catch (err) {
      throw new Error("An error occurred fetching users!");
    }
  },
  async findUserById(_, { _id }, { User }): Promise<IUser | null> {
    try {
      const user: IUser | null = await User.findOne({ _id })
        .populate("comments")
        .populate("posts");
      return user;
    } catch (err) {
      throw new Error("An error occurred fetching a user!");
    }
  },
  async findUsers(_, { queryString }, { User }): Promise<IUser[] | null> {
    // if we are searching with less than 3 characters throw error
    if (queryString.length < 3) {
      throw new Error("Search string must be at least 3 characters long");
    }
    // use query string to search database for either name or email, with 'i' option for case insensitivity
    try {
      const users: IUser[] | null = await User.find({
        $or: [
          { name: { $regex: queryString, $options: "i" } },
          { email: { $regex: queryString, $options: "i" } },
        ],
      })
        .populate("comments")
        .populate("posts");
      return users;
    } catch (err) {
      throw new Error("An error occurred searching for a user");
    }
  },
};

export default UserQueries;
