const Recipe = require('../model/Recipe');
const Booking = require('../model/Booking');

module.exports = {
  Query: {
    async bookings(_, { amount }) {
      return await Booking.find().sort({ createdAt: -1 }).limit(amount);
    },
    // async recipe(_, { ID }) {
    //   return await Recipe.findById(ID);
    // },
    // async getRecipes(_, { amount }) {
    //   return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
    // },
  },

  Mutation: {
    async createBooking(
      _,
      {
        bookingInput: {
          plate_number,
          car_type,
          parked,
          date,
          duration,
          parking_type,
          parking_place,
        },
      }
    ) {
      const createdParking = new Booking({
        plate_number: plate_number,
        car_type: car_type,
        paid: false,
        parked: parked,
        date: date,
        duration: duration,
        parking_type: parking_type,
        parking_place: parking_place,
        createdAt: new Date().toISOString(),
      });

      const res = await createdParking.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    async editBooking(_, { ID, bookingInput: { parked } }) {
      await Booking.updateOne({ _id: ID }, { parked: parked });
      const editedData = await Booking.findById({ _id: ID });
      return editedData;
    },

    async deleteBooking(_, { ID }) {
      const deletedBooking = await Booking.findByIdAndDelete(ID);
      return deletedBooking;
    },

    // async createRecipe(_, { recipeInput: { name, description } }) {
    //   const createdRecipe = new Recipe({
    //     name: name,
    //     description: description,
    //     createdAt: new Date().toISOString(),
    //     thumbsDown: 0,
    //     thumbsUp: 0,
    //   });

    //   const res = await createdRecipe.save();

    //   return {
    //     id: res.id,
    //     ...res._doc,
    //   };
    // },

    // async deleteRecipe(_, { ID }) {
    //   const wasDeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount;
    //   return wasDeleted; // if 1 returns true if 0 returns false
    // },

    // async editRecipe(_, { ID, recipeInput: { name, description } }) {
    //   const wasEdited = (
    //     await Recipe.updateOne(
    //       { _id: ID },
    //       { name: name, description: description }
    //     )
    //   ).modifiedCount;
    //   return wasEdited;
    // },
  },
};
