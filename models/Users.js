import { Schema, model, models } from 'mongoose';

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    unique: false,
    required: true,
  }
})

const Users = models.Users || model('Users', UsersSchema);

export default Users;