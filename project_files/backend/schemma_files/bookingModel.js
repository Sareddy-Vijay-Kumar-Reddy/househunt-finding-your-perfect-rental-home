const mongoose = require("mongoose");

const bookingModel = mongoose.Schema(
  {
    propertId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "propertyschema",
    },
    ownerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    userName: {
      type: String,
      required: [true, "Please provide a User Name"],
    },
    phone: {
      type: Number,
      required: [true, "Please provide a Phone Number"],
    },
    bookingStatus: {
      type: String,
      required: [true, "Please provide a booking Type"],
    },
  },
  {
    strict: false,
  }
);

const bookingSchema = mongoose.model("bookingschema", bookingModel);

module.exports = bookingSchema;