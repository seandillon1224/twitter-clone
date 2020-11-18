// Import Individual Resolver Files Here
const { PostQueries } = require("./PostQueries");
 const {UserQueries} = require('./UserQueries')
// Export them here, spread them in since they are objs
module.exports = {
    ...PostQueries,
    ...UserQueries
};