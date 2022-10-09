import clientPromise from "../../../lib/mongodb"
import { hash } from "bcryptjs"

async function handler(req, res) {

  if (req.method !== 'POST') {
    res.status(500).json({ message: 'Route not valid' });
  } else {
    const { email, password } = req.body;

    if (!email || !email.includes('@') || !password) {
      res.status(422).json({ message: 'Invalid Data' });
      return;
    }
    const client = await clientPromise; 
    const db = await client.db(process.env.MONGODB);
    console.log(db);
    const checkExist = await db.collection('users').findOne({ email: email });
    if (checkExist) {
      res.status(422).json({ message: 'User already exists' });
      client.close();
      return;
    }
    //Hash password
    const status = await db.collection('users').insertOne({
      email,
      password: await hash(password, 12),
    });
    //Send success response
    res.status(201).json({ message: 'User created', ...status });
    //Close DB connection
    client.close();
  }
}


export default handler;