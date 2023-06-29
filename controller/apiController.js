import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import Discuss from "../model/Discuss.js";
import { config } from "dotenv";

config({ path: ".env" });

const createToken = (_id) => {
   return jwt.sign({ _id }, process.env.JWT_SECRET);
};

const register = async (req, res) => {
   const { email, username, password } = req.body;

   try {
      const exist = await User.findOne({ email });
      if (exist) {
         throw Error("Email Exist!");
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      await User.create({ email, username, password: hash });
      res.status(201).send({ msg: "Berhasil Register" });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

const login = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await User.findOne({ email });
      if (!user) {
         throw Error("Incorrect Email");
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
         throw Error("Incorrect Password");
      }

      const token = createToken(user._id);
      res.status(201).send({ msg: "Berhasil Login", token, data: user });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

const getDiskusi = async (req, res) => {
   const { category } = req.query;

   try {
      if(category != null){
         const filter = await Discuss.find({ category });
         res.status(200).send({ diskusi: filter });
      } else {
         const diskusi = await Discuss.find();
         res.status(200).send({ diskusi });
      }
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

const postDiskusi = async (req, res) => {
   const { username, discuss, category } = req.body;

   try {
      const date = Date.now();
      await Discuss.create({ username, date, discuss, category });
      res.status(201).send({ msg: "Berhasil menambahkan diskusi" });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

export { login, register, getDiskusi, postDiskusi };
