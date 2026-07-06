import { useState } from "react";
import "./App.css";

import "./index.css";
import { Users } from "./users";
import { Shop } from "./shop";
import { DatingFront } from "./DatingFront";
import { Button } from "./Button";
const planning = ["Learn React🎯", "Learn Node 🥇", "Built Project🏆"];

function App() {
  const [step, setStep] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [isNotClicked, setIsNotClicked] = useState(true);
  const [count,setCount]=useState(0)
  function handlePrev() {
    if (step > 1) setStep((p) => p - 1);
  }
  function handleNext() {
    if (step < planning.length) setStep((p) => p + 1);
  }
  function handleClose() {
    setIsModal(false);
    setIsNotClicked(true);
  }
  function handleModal() {
    setIsModal(true);
    setIsNotClicked(false);
  }
  function increment(){
    setCount(p=>p+1);

    
  }

  const success = {
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    width: "100px",
  };
   const warning = {
     backgroundColor: "#e7ca09",
     color: "white",
     padding: "10px",
     borderRadius: "10px",
     border: "none",
     outline: "none",
     width: "100px",
   };

  return (
    <>
      {/* {isNotClicked &&
    <button className="click" onClick={handleModal}>click here</button>
    }
    {isModal && 
    <div className="card">
      <div className="cancel"><button onClick={handleClose}>×</button></div>
      <div className="nums">
        <div className={step >= 1 ? "active num" : "num"}>1</div>
        <div className={step >= 2 ? "active num" : "num"}>2</div>
        <div className={step >= 3 ? "active num" : "num"}>3</div>
      </div>
      <div className="message">
        Step - {step} {planning[step - 1] }
      </div>
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
    }
    <Users/> */}
      {/* <Shop/> */}
      <DatingFront/>
      
    
      {/* <Button name='Click' className='primary' click={increment} />
      <p>{count}</p> */}
      {/* <Button name="Next" variant={success} />
      <Button name="Prev" variant={warning} /> */}
    </>
  );
}

export default App;
