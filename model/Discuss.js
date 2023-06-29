import mongoose from "mongoose";

const discussSchema = new mongoose.Schema({
   username: {
      type: String,
      required: [true, "username is required!"],
   },
   date: {
      type: Date,
      default: Date.now,
      required: [true, "Date is required!"],
   },
   discuss: {
      type: String,
      required: [true, "Discuss is required!"],
   },
   category: {
      type: String,
      required: [true, "Category is required!"],
   },
});

export default mongoose.model.Discuss || mongoose.model("Discuss", discussSchema);
