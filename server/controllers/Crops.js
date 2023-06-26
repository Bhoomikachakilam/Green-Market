import Farm from "../models/Farm.js"
const addCrop = async (req, res) => {
  try {
    const { crop,Farmername, stock, measurement,price, village, mobile } = req.body;
    console.log(req.body)
    const newCrop = await Farm.create({
      Farmername:Farmername,
      crop:crop,
      stock:stock,
      measurement:measurement,
      price:price,
      village:village,
      mobile: mobile,
      farmer: req.user.userId
    });
    res.json({
      id: newCrop._id,
       Farmername:newCrop.Farmername,
        crop: newCrop.crop,
        stock: newCrop.stock,
        measurement:newCrop.measurement,
        price: newCrop.price,
        village:newCrop.village,
        mobile: newCrop.mobile,
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const getCropsByFarmer = async (req, res) => {
  try {
    const crops = await Farm.find({ farmer: req.user.userId }).exec(); 
    res.json(crops);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const getCrops = async (req, res) => {
  try {
    const crops = await Farm.find().exec(); 
    res.json(crops);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
export { addCrop, getCropsByFarmer,getCrops };

