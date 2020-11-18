export const UserMutations = {

    async addNewUser(_, args, {db}) {
        const {input } = args
       //  console.log('Do thing', ctx.db, input )

        const res  =  await db.User.create(input)
        return res
    }
} 