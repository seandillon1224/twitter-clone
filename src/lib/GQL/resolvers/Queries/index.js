// Import Individual Resolver Files Here
const { ThreadQueries } = require("./ThreadQueries");
// Export them here, spread them in since they are objs
module.exports = {
    ...ThreadQueries,
};