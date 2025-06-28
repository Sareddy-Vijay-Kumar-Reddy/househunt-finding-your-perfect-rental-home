const mongoose = require('mongoose')

const propertyModel = mongoose.Schema({
   ownerId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
   },
   propertyType:{
      type:String,
      required:[true,'Please provide a Property Type']
   },
   propertyAdType:{
      type: String,
      required:[true,'Please provide a Property Ad Type']
   },
   propertyAddress:{
      type: String,
      required:[true,"Please Provide an Address"]
   },
   ownerContact:{
      type: Number,
      required: [true, 'Please provide owner contact']
   },
   propertyAmt:{
      type :Number ,
      default: 0,
   },
   propertyImage: {
      type: Object
   },
   additionalInfo:{
      type: String,
   },
   ownerName: {
      type: String,
   }
},{
   strict: false,
})

const propertySchema = mongoose.model('propertyschema', propertyModel)

module.exports = propertySchema