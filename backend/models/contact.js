import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  cellPhone: Number,
});

const contact = mongoose.model("contact", contactSchema);

export default contact;