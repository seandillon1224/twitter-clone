// Import Individual Resolver Files Here
import PostQueries from "./PostQueries";
import UserQueries from "./UserQueries";
// Export them here, spread them in since they are objs

export default {
  ...PostQueries,
  ...UserQueries,
};
