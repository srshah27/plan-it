
import connectMongo from '../../lib/dbConnect';
import Users from "../../models/Users";
import { hash } from 'bcryptjs';
export default async function handler(req, res) {
  let body = req.body;
  let email = body.email;
  let password = body.password;
  let cpassword = body.cpassword;
  let name = body.name;
  
  if (password != cpassword) {
    res.status(400).json({ message: "Passwords do not match" });
    return;
  }
  await connectMongo();
  let  duplicateUser = await Users.findOne({ email: email });
  if (duplicateUser) {
    res.status(400).send({ message: "User already Exists" });
    return
  }
  console.log("123done");
  let user = await Users.create({email, password: await hash(password, 10), name, image: `https://avatars.dicebear.com/api/avataaars/${name}.svg`});
  res.status(200).send({message: "User Added"});
  
}
