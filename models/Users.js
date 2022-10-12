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
    unique: true,
  },
  image: {
    type: String,
    unique: false,
    require: true,
  }
})

const Users = models.Users || model('Users', UsersSchema);

export default Users;