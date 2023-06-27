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
};const updateCropByFarmer = async (req, res) => {
  try {
    const { crop, stock, measurement, price, village, mobile } = req.body;
    const { cropId } = req.params;

    const updatedCrop = await Farm.findOneAndUpdate(
      { _id: cropId, farmer: req.user.userId },
      { crop, stock, measurement, price, village, mobile },
      { new: true }
    );

    if (!updatedCrop) {
      return res.status(404).json({ success: false, message: "Crop not found or unauthorized" });
    }

    res.json({
      id: updatedCrop._id,
      Farmername: updatedCrop.Farmername,
      crop: updatedCrop.crop,
      stock: updatedCrop.stock,
      measurement: updatedCrop.measurement,
      price: updatedCrop.price,
      village: updatedCrop.village,
      mobile: updatedCrop.mobile,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export { addCrop, getCropsByFarmer, getCrops, updateCropByFarmer };

