import { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
  taskTitle: String,
  user: String
})

const Task = models.Task || model('Task', TaskSchema);

export default Task;