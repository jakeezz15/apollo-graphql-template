const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    # recipe(ID: ID!): Recipe!
    # getRecipes(amount: Int): [Recipe]
    bookings(amount: Int): [Booking]
  }

  type Mutation {
    # createRecipe(recipeInput: RecipeInput): Recipe!
    # deleteRecipe(ID: ID!): Boolean
    # editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
    createBooking(bookingInput: BookingInput): Booking!
    editBooking(ID: ID!, bookingInput: BookingInput): Booking!
    deleteBooking(ID: ID!): Booking
  }

  #This fields are for the data types for Schema ----

  type Recipe {
    name: String
    description: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
  }

  type Booking {
    plate_number: String
    car_type: String
    paid: Boolean
    parked: Boolean
    date: String
    duration: String
    createdAt: String
    parking_type: String
    parking_place: String
  }

  #Codes below are for the inputs

  input RecipeInput {
    name: String
    description: String
  }

  input BookingInput {
    plate_number: String
    car_type: String
    parked: Boolean
    date: String
    duration: String
    parking_type: String
    parking_place: String
  }
`;
