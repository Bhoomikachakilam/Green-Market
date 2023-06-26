import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./customer.css"
const AllCrops = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from storage
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:5000/greenmarket/getCrops', config);
        setCrops(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Crops</h2>
      <div className='list'>
        {crops.map((crop) => (
          <div className="crop" key={crop._id}>
            <h3 style={{ textAlign: 'center' }}>Crop Name: {crop.crop}</h3>
            <div className="crop-details">
              <div>
              <h4>Farmer Name: {crop.farmerName}</h4>
                <h4>Stock: {crop.quantity}</h4>
                <h4>Price: {crop.price} per {crop.measurement}</h4>
              </div>
              <div>
                <h4>Village: {crop.village}</h4>
                        <h4>Mobile: {crop.mobile}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCrops;
