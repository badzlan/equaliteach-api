import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   email: {
      type: String,
      required: [true, "Email is required!"],
      unique: [true, "Email exist!"],
   },
   username: {
      type: String,
      required: [true, "Username is required!"],
   },
   password: {
      type: String,
      required: [true, "Password is required!"],
   },
});

export default mongoose.model.Users || mongoose.model("User", userSchema);
