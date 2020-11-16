// Import Individual Resolver Files Here
const { ThreadMutations } = require('./ThreadMutations');
// Export them here, spread them in since they are objs
module.exports = {
    ...ThreadMutations,
};