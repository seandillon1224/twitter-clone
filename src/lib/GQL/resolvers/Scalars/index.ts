const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

export const Date = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value: any) {
    return new Date(value); // value from the client
  },
  serialize(value: any) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value); // ast value is always in string format
    }
    return null;
  },
});
