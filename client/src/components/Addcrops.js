import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Addcrops.css";
const Addcrops = () => {
  const [Farmername, setFarmername] = useState("");
  const [crop, setCrop] = useState("");
  const [stock, setStock] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [price, setPrice] = useState("");
  const [village, setVillage] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://greenmarket.onrender.com/addcrop",
        {
          Farmername,
          crop,
          stock,
          measurement,
          price,
          village,
          mobile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      alert("Crop added successfully!");
        navigate("/farmer/Farmercrops");
    
    } catch (error) {
      console.error(error);
      alert("Error adding crop.");
    }
  };
  return (
    <div className="add-crops-form-container">
      <div className="add-crops-form-title">
        <h3>Add Crops</h3>
      </div>
      <form onSubmit={handleSubmit} className="add-crops-form">
        <input
          type="text"
          placeholder="Farmer name"
          value={Farmername}
          onChange={(e) => setFarmername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Crop"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Measurement"
          value={measurement}
          onChange={(e) => setMeasurement(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Village"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <button type="submit">Add Crop</button>
      </form>
    </div>
  );
};
export default Addcrops