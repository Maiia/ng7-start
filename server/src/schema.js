const Cat = require('./data/cats');
const CatsOwner = require('./data/cat_owners');
const _ = require('lodash');

let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema
} = require('graphql');

const CatType = new GraphQLObjectType({
  name: "Cat",
  description: "This represent a cat",
  fields: () => ({
    catName: {type: new GraphQLNonNull(GraphQLString)},
    catColor: {type: GraphQLString},
    catAge: {type: GraphQLString},
    catHabits: {type: GraphQLString}
  })
});

const CatsOwnerType = new GraphQLObjectType({
  name: "CatsOwner",
  description: "This represent a cat owner",
  fields: () => ({
    name: {type: new GraphQLNonNull(GraphQLString)},
    hairColor: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: new GraphQLNonNull(GraphQLString)}
  })
});

const BlogQueryRootType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: "Blog Application Schema Query Root",
  fields: () => ({
    cats: {
      type: new GraphQLList(CatType),
      description: "List of all Authors",
      resolve: function() {
        return Cat
      }
    },
    catsOwners: {
      type: new GraphQLList(CatsOwnerType),
      description: "List of all Posts",
      resolve: function() {
        return CatsOwner
      }
    }
  })
});

const BlogAppSchema = new GraphQLSchema({
  query: BlogQueryRootType
});

module.exports = BlogAppSchema;
