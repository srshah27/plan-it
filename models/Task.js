import { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
  taskTitle: String,
  user: String,
  End: Date,
  Start: Date,
  Duration: Date,
  Summary: String,
  IsAllDay: Boolean,
  ReccurenceRule: String,
  IsReadonly: Boolean,
  IsBlocked: Boolean
})

const Task = models.Task || model('Task', TaskSchema);

export default Task;