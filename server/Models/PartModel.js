import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  partNumber: {
    required: true,
    type: String
  },
  location: {
    required: true,
    type: String
  },
  onHand: {
    required: true,
    type: Number
  },
  status: {
    required: true,
    type: String
  },
  date: {
    required: false,
    type: Date
  },
  memo: {
    required: false,
    type: Array
  },
  deleted: {
    required: false,
    type: Boolean
  }
});

const PartModel = mongoose.model("Part", schema);
export default PartModel;
