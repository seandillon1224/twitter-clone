export const ThreadMutations = {

    async addPost(_, args, {db}) {
        console.log('Do thing', db, args)
        const {input} = args
      const res = await  db.Post.create(input)

      return res

    }
} 