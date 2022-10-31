import connectMongo from '../../lib/dbConnect';
import Task from "../../models/Task";
export default async function handler(req, res) {
  let body = req.body;
  let email = body.email;
  await connectMongo();
  let tasks = await Task.find({ "email": email})
  console.log(tasks);
  res.status(200).json(tasks);
}