// Import Individual Resolver Files Here
import PostMutations from './PostMutations';
import UserMutations from './UserMutations';
// Export them here, spread them in since they are objs

export default {
    ...PostMutations,
    ...UserMutations
};