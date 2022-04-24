import React,{useState} from 'react';
import './App.css';

const App = ()=>{
  let [height, setHeight] = useState();
  let [weight, setWeight] = useState();
  let [result, setResult] = useState();
  let [status, setStatus] = useState();

  const CalculateBMI = ()=>{
    let bmi =(weight /(height/100)**2).toFixed(2);
    setResult(bmi);
    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);
<<<<<<< HEAD
    
=======
   
>>>>>>> bfdf4836762890a1e728267175b21fc53933014d
    setHeight("");
    setWeight("");

  }

  const getStatus = (bmi)=>{
      if (bmi <18.9) return "Underweight";
      else if (bmi >= 18.9 && bmi <25.4) return "Normal";
      else if(bmi >=26 && bmi <30) return "Overweight";
      else return "Obese";
      
  }
        
  return(
    <>
       <div className="main-container">
          <div className="container">
            <h2>BMI Calculator</h2>
<<<<<<< HEAD
            <input type="text"  placeholder='Enter Your Height in cm'
              value={height}
              onChange={(e)=>{setHeight(e.target.value)}}
            />
            <input type="text"  placeholder='Enter Your Weight in kg'
=======
            <input type="text"  placeholder='Please Enter Your Height in CM'
              value={height}
              onChange={(e)=>{setHeight(e.target.value)}}
            />
            <input type="text"  placeholder='Please Enter Your Weight in Kg'
>>>>>>> bfdf4836762890a1e728267175b21fc53933014d
                value={weight}
                onChange={(e)=>{setWeight(e.target.value)}}
            />
            <button onClick={CalculateBMI}>BMI Calculate</button>
            <div className="result-btn">
              <p>Your BMI IS :<span>{result}</span></p>
              <p>Your Currently Status :<span>{status}</span></p>
            </div>
         </div>
        </div>
    </>
  )
}
export default App;
