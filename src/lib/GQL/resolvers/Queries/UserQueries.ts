import ResolverMap from "../types";
import { IUser } from "lib/models/user";

const UserQueries: ResolverMap = {
  async allUsers(_, __, { User }): Promise<IUser[] | null> {
    try {
      const users: IUser[] | null = await User.find();
      return users || [];
    } catch (err) {
      throw new Error("An error occurred fetching users!");
    }
  },
  async findUser(_, { _id }, { User }): Promise<IUser | null> {
    try {
      const user: IUser | null = await User.findOne({ _id });
      return user;
    } catch (err) {
      throw new Error("An error occurred fetching users!");
    }
  },
};

export default UserQueries;