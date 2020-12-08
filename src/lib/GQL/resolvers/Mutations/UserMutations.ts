import ResolverMap from "../types";
import { IUser } from "lib/models/user";

const UserMutations: ResolverMap = {
  async addNewUser(_, args, { User }): Promise<IUser> {
    const { input } = args;
    try {
      const res: IUser = await User.create({...input, createdAt: new Date()});
      return res;
    } catch (err) {
      console.log(err)
      throw new Error("An error occurred creating user!");
    }
  },
};

export default UserMutations;
