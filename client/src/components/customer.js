import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './customer.css';
function Products() {
  const [crops, setCrops] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://greenmarket.onrender.com/getCrops', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCrops(response.data);
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };
    fetchCrops();
  }, [navigate]);
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
                <h4>Farmer Name: {crop.farmerName}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
