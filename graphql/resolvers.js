const { users, posts } = require("../data")


const resolvers = {
    Query: {
        users(root, args) {
            return users;
        },
        user(_, {id}){
            return users.find((user) => user.id == id)
        },
        posts(){
            return posts;
        },
        post(_, {id}){
            return posts.find((post) => post.id == id)
        }
    },

    Mutation: {
        addUser(_,{input: {
            firstName,
            lastName,
            gander,
            phone,
            email,
            isMarried
        }}) {
            const user = {
                id: users.length + 1,
                firstName,
                lastName,
                gander,
                phone,
                email,
                isMarried,
                posts: [],
            }
            users.push(user);
            return user;
        }
    }
}

module.exports = resolvers;