import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Farmer = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  useEffect(() => {
    if (selectedOption) {
      navigate(`/farmer/${selectedOption}`);
    }
  }, [selectedOption, navigate]);
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h4>Select an option:</h4>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">-- Select an option --</option>
          <option value="Allcrops">See All Crops</option>
          <option value="Farmercrops">See Your Crops</option>
          <option value="Addcrops">Add Crops</option>
        </select>
      </div>
    </div>
  );
};

export default Farmer;
