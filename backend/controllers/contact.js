import contact from "../models/contact.js";

const addContact = async (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.cellPhone)
    return res.status(400).send({ message: "Incomplete data" });

  const existingContact = await contact.findOne({ name: req.body.name });
  if (existingContact)
    return res.status(400).send({ message: "the contact already exists" });

  const contactSchema = new contact({
    name: req.body.name,
    phone: req.body.phone,
    cellPhone: req.body.cellPhone,
  });

  const result = await contactSchema.save();
  return !result
    ? res.status(400).send({ message: "Failed to register contact" })
    : res.status(200).send({ result });
};

const listContact = async (req, res) => {
  const contactList = await contact.find();
  return contactList.length == 0
    ? res.status(400).send({ message: "Empty contact list" })
    : res.status(200).send({ contactList });
};

const deleteContact = async (req, res) => {
  const contactDelete = await contact.findByIdAndDelete({ _id: req.params["_id"] });
  return !contactDelete
    ? res.status(400).send({ message: "Contact no found" })
    : res.status(200).send({ message: "Contact deleted" });
};


export default {addContact, listContact, deleteContact};