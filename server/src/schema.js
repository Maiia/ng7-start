// Authors и Posts получают данные в виде
// JSON массивов с соответствующих файлов
const Cat = require('./data/cats');
const CatsOwner = require('./data/cat_owners');
const _ = require('lodash');

let {
  // Здесь базовые типы GraphQL, которые нужны в этом уроке
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  /* Это необходимо для создания требований
     к полям и аргументам */
  GraphQLNonNull,
  // Этот класс нам нужен для создания схемы
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
    ownerName: {type: new GraphQLNonNull(GraphQLString)},
    hairColor: {type: GraphQLString},
    email: {type: GraphQLString},
    phoneNumber: {type: new GraphQLNonNull(GraphQLString)}
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
    cats_owners: {
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
  /* Если вам понадобиться создать или
     обновить данные, вы должны использовать
     мутации.
     Мутации не будут изучены в этом посте.
     mutation: BlogMutationRootType
  */
});

module.exports = BlogAppSchema;
