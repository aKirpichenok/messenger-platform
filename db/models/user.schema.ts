import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  age: {
    type: Number,
    required: [false, 'Please provide an age']
  },
  online: {
    type: Boolean,
  },
})

export const UserModel = mongoose.models && "User" in mongoose.models ? mongoose.models.User as mongoose.Model<any> : mongoose.model<any>("User", UserSchema);