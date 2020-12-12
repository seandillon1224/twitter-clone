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
  async editUser(_, args, { User}): Promise<IUser> {
    try {
      const { input, userId } = args;
      const user: IUser  = await User.findOneAndUpdate({_id: userId}, input, {new: true})

      return user
    } catch(err) {
      throw new Error('An error occurred while editing the post')
    }
  },
  async deleteUser(_, args, {Post}): Promise<Ipost> {
    const {userId} = args;
    
    const user: IUser  = await Post.findOneAndDelete({_id : userId});
    console.log(user)
    return user;

  }
};

export default UserMutations;
