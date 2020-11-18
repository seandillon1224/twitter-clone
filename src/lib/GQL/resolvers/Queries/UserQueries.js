export const UserQueries = {

    async allUsers(_, args, {db}) {
        console.log('Do thing')
        const res = await db.User.find({})
        return res
    }
}

