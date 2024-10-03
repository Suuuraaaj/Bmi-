import { useState } from 'react';
import './App.css';

function App() {
  // State to track the height and weight
  const [height, setHeight] = useState(100); // Default value: 100 cm
  const [weight, setWeight] = useState(50);  // Default value: 50 kg
  const [bmi, setBmi] = useState(null);       // State to store BMI
  const [healthStatus, setHealthStatus] = useState(''); // State to store health status
  // Function to handle height input change
  const handleHeightChange = (e) => {
    const value = Math.max(0, Math.min(200, e.target.value)); // Ensure value is between 0 and 200
    setHeight(value);
  };

  // Function to handle weight input change
  const handleWeightChange = (e) => {
    const value = Math.max(0, Math.min(100, e.target.value)); // Ensure value is between 0 and 100
    setWeight(value);
  };

  const calculateBMI = () => {
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
    setHealthStatus(determineHealthStatus(bmiValue));
  };

   // Function to determine health status based on BMI
   const determineHealthStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese,Please exercise';
    }
  };

  return (
    <div className="container  d-flex flex-column justify-content-center align-items-center border p-4 text-white custom-shadow">
      <h3 className="text-center">BMI Calculator</h3>
      
      {/* Height Input and Slider */}
      <div className="my-4">
        <h5 className='fw-bolder'>Height: {height} cm</h5>
        <input
          type="range"
          className="form-range-md"
          id="heightRange"
          min="0"
          max="200"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          id="heightInput"
          className="form-control-md ms-5 rounded-pill"
          placeholder="Rounded input"
          value={height}
          onChange={handleHeightChange}
        />
        <p className="mt-2 custom fw-light">Your Height: {height} cm</p>
      </div>

      {/* Weight Input and Slider */}

      <div className="my-4">
        <h5 className='fw-bolder'>Weight: {weight} kg</h5>
        <input
          type="range"
          className="form-range-md "
          id="weightRange"
          min="0"
          max="200"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        
        <input
          type="text"
          id="weightInput"
          className="form-control-md ms-5 rounded-pill"
          placeholder="Rounded input"
          value={weight}
          onChange={handleWeightChange}
        />
        <p className="mt-2 custom fw-light">Your Weight: {weight} kg</p>
      </div>
      
      {/* Button to calculate BMI */}
      <button className="btn btn-primary btn-rounded me-5 btn-advanced btn-md rounded-pill" onClick={calculateBMI}>
        Calculate BMI
      </button>



      {/* Display the calculated BMI and health status */}
      {bmi && (
        <div className="result mt-4 d-flex justify-content-center-align-items-center">
          <h6 className='me-5 fw-bold'>Your BMI: {bmi.toFixed(2)}</h6>
          
        </div>
        
      )}
      <div>
      <h6 className='mt-3'>Health Status: {healthStatus}</h6>
      </div>

    </div>
  );
}

export default App;
