import mongoose from "mongoose";
const farmSchema = mongoose.Schema(
  {
    Farmername: {
      type: String,
      required: true,
    },
    crop: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    measurement: {
      type: String,
      required:true,
    },
    price: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
const farm = mongoose.model("farm", farmSchema);
export default farm;
