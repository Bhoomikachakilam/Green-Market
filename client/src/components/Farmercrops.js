import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Farmercrops.css"
const CropItem = ({ crop, updateCrop }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedCrop, setUpdatedCrop] = useState({
    stock: crop.stock,
    measurement: crop.measurement,
    price: crop.price,
  });

  const handleInputChange = (e) => {
    setUpdatedCrop({ ...updatedCrop, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCrop(crop._id, updatedCrop);
  };

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  if (!crop) {
    return null; // Return null or a placeholder component if crop is undefined
  }

  return (
    <div id="crop" key={crop._id}>
      <h3 style={{ textAlign: 'center' }}>Crop Name: {crop.crop}</h3>
      <div id="crop-details">
        <div>
          <h4>Farmer Name: {crop.Farmername}</h4>
          <h4>Stock: {crop.stock}</h4>
          <h4>Price: {crop.price} per {crop.measurement}</h4>
        </div>
        <div>
          {showUpdateForm ? (
            <form onSubmit={handleSubmit}>
              <input type="number" name="stock" placeholder="Stock" value={updatedCrop.stock} onChange={handleInputChange} />
              <input type="text" name="measurement" placeholder="Measurement" value={updatedCrop.measurement} onChange={handleInputChange} />
              <input type="text" name="price" placeholder="Price" value={updatedCrop.price} onChange={handleInputChange} />
              <button type="submit">Update Crop</button>
            </form>
          ) : (
            <button onClick={toggleUpdateForm}>Update Crop</button>
          )}
        </div>
      </div>
    </div>
  );
};

const FarmerCropList = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get('https://greenmarket.onrender.com/getcropsbyFarmer', config);
      setCrops(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCrop = async (cropId, updatedCropData) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(`https://greenmarket.onrender.com/updatecrop/${cropId}`, updatedCropData, config);
      console.log(response.data); // Log the updated crop data
      // You can optionally update the state with the updated data or fetch the crops again
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Crops</h2>
      <div id='list'>
        {crops.map((crop) => (
          <CropItem key={crop._id} crop={crop} updateCrop={updateCrop} />
        ))}
      </div>
    </div>
  );
};

export default FarmerCropList;
