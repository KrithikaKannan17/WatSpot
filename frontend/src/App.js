import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [noiseLevel, setNoiseLevel] = useState("");
  const [aesthetic, setAesthetic] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [foodAvailability, setFoodAvailability] = useState("");
  const [studySpot, setStudySpot] = useState("");

  const locations = [
      { id: 'slc', name: 'SLC', top: "30%", left: "50%" },
      { id: "ev3", name: "EV3", top: "70%", left: "47%" },
      { id: "hageyhall", name: "HH", top: "75%", left: "55%" },
      { id: 'dwe', name: 'DWE', top: "65%", left: "70%" },
      { id: "stc", name: "STC", top: "46%", left: "56%" },
      { id: "qnc", name: "QNC", top: "35%", left: "54%" },
      { id: "ev1", name: "EV1", top: "68%", left: "55%" },
      { id: "dp", name: "DP", top: "55%", left: "60%" },
      { id: "dc", name: "DC", top: "35%", left: "72%" },
      { id: "mc", name: "MC", top: "40%", left: "60%" },
      { id: "phy313", name: "PHY", top: "50%", left: "68%" },
      { id: "v1", name: 'V1', top: "17%", left: "25%" },  
  ];

  const handleStudySpot = () => {
    if (noiseLevel === "Self Study" && aesthetic === "Minimalistic" && foodAvailability === "Yes") {
      setStudySpot("MC");
    } else if (noiseLevel === "Self Study" && aesthetic === "Minimalistic" && foodAvailability === "No") {
      setStudySpot("PHY");
    } else if (noiseLevel === "Self Study" && aesthetic === "Cozy" && foodAvailability === "Yes") {
      setStudySpot("SLC");
    } else if (noiseLevel === "Self Study" && aesthetic === "Cozy" && foodAvailability === "No") {
      setStudySpot("DWE");
    } else if (noiseLevel === "Self Study" && aesthetic === "Nature" && foodAvailability === "Yes") {
      setStudySpot("EV3");
    } else if (noiseLevel === "Self Study" && aesthetic === "Nature" && foodAvailability === "No") {
      setStudySpot("SLC");
    } else if (noiseLevel === "Group Study" && aesthetic === "Minimalistic" && foodAvailability === "Yes") {
      setStudySpot("DP");
    } else if (noiseLevel === "Group Study" && aesthetic === "Cozy" && foodAvailability === "Yes") {
      setStudySpot("V1");
    } else if (noiseLevel === "Group Study" && aesthetic === "Nature" && foodAvailability === "Yes") {
      setStudySpot("EV1");
    } else if (noiseLevel === "Duo Study" && aesthetic === "Minimalistic" && foodAvailability === "No") {
      setStudySpot("PHY");
    } else if (noiseLevel === "Duo Study" && aesthetic === "Cozy" && foodAvailability === "Yes") {
      setStudySpot("STC");
    } else if (noiseLevel === "Duo Study" && aesthetic === "Cozy" && foodAvailability === "No") {
      setStudySpot("QNC");
    } else {
      setStudySpot("SLC");
    }
  };
  
  const getSpotStyle = (location) => {
    if (studySpot === location.name) {
      return {
        backgroundColor: "green",
        color: "white",
        fontSize: "14px",
        fontWeight: "bold",
        padding: "8px",
        borderRadius: "50%",
        textAlign: "center",
      };
    }
    return {
      backgroundColor: "red",
      color: "white",
      padding: "5px",
      borderRadius: "50%",
      textAlign: "center",
    };
  };

  return (
    <div className="App">
      <div className="heading-container">
        <h1 className="App-header">WatSpot: UW Study Spaces</h1>
        <p className="tagline">
          Crafted for how you work, WatSpot finds your spot!
        </p>
      </div>

      <div className="input-container">
        <div className="input-section">
          <label htmlFor="noise">Noise Level</label>
          <select
            id="noise"
            className="input-dropdown"
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Self Study">Self Study</option>
            <option value="Duo Study">Duo Study</option>
            <option value="Group Study">Group Study</option>
          </select>
        </div>

        <div className="input-section">
          <label htmlFor="aesthetic">Aesthetic</label>
          <select
            id="aesthetic"
            className="input-dropdown"
            value={aesthetic}
            onChange={(e) => setAesthetic(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Cozy">Cozy</option>
            <option value="Green Space">Green Space</option>
            <option value="Minimalistic">Minimalistic</option>
            <option value="Modern">Modern</option>
          </select>
        </div>

        <div className="input-section">
          <label htmlFor="location">Current Location</label>
          <select
            id="location"
            className="input-dropdown"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="AL">AL</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="BMH">BMH</option>
            <option value="C2">C2</option>
            <option value="CMH">CMH</option>
            <option value="CPH">CPH</option>
            <option value="DC">DC</option>
            <option value="DP">DP</option>
            <option value="DWE">DWE</option>
            <option value="E2">E2</option>
            <option value="E3">E3</option>
            <option value="E5">E5</option>
            <option value="E6">E6</option>
            <option value="E7">E7</option>
            <option value="EIT">EIT</option>
            <option value="ERC">ERC</option>
            <option value="ESC">ESC</option>
            <option value="EV1">EV1</option>
            <option value="EV2">EV2</option>
            <option value="EV3">EV3</option>
            <option value="EXP">EXP</option>
            <option value="HH">HH</option>
            <option value="M3">M3</option>
            <option value="MC">MC</option>
            <option value="MKV">MKV</option>
            <option value="ML">ML</option>
            <option value="NH">NH</option>
            <option value="OPT">OPT</option>
            <option value="PAC">PAC</option>
            <option value="PAS">PAS</option>
            <option value="PHY">PHY</option>
            <option value="QNC">QNC</option>
            <option value="RCH">RCH</option>
            <option value="REV">REV</option>
            <option value="SCH">SCH</option>
            <option value="SLC">SLC</option>
            <option value="STC">STC</option>
            <option value="TC">TC</option>
            
          </select>
        </div>

        <div className="input-section">
          <label htmlFor="food">Food Availability</label>
          <select
            id="food"
            className="input-dropdown"
            value={foodAvailability}
            onChange={(e) => setFoodAvailability(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <button className="study-button" onClick={handleStudySpot}>
        Let's study!
      </button>

      {studySpot && (
        <div className="suggested-spot">
          Suggested Study Spot: <strong>{studySpot}</strong> matches your preference
        </div>
      )}

      <div className="map-container">
        {locations.map((location) => (
          <div
            key={location.id}
            className="pin"
            style={{
              ...getSpotStyle(location),
              position: "absolute",
              top: location.top,
              left: location.left,
            }}
          >
            {location.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;