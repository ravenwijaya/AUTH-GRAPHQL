const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: graphql.GraphQLID },
    email: {
      type: GraphQLString,
    },
  },
});

module.exports = UserType;
