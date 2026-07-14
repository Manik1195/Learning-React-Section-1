import { useState } from "react";
import { Button } from "./Button";
export function Steps(){
    const planning = ["Learn React🎯", "Learn Node 🥇", "Built Project🏆"];
    const [isNotClicked, setIsNotClicked] = useState(true);
    const [step, setStep] = useState(1);
     const [isModal, setIsModal] = useState(false);
     function handlePrev() {
       if (step > 1) setStep((p) => p - 1);
     }
     function handleNext() {
       if (step < planning.length) setStep((p) => p + 1);
     }
       function handleModal() {
         setIsModal(true);
         setIsNotClicked(false);
       }
        function handleClose() {
          setIsModal(false);
          setIsNotClicked(true);
        }
        return (
          <>
            {isNotClicked && (
              <div className="click-container">
                <Button className="button" click={handleModal}><p>Click 👆</p></Button>
              </div>
            )}
            {isModal && (
              <div className="card">
                <div className="cancel">
                  <button onClick={handleClose}>×</button>
                </div>
                <div className="nums">
                  <div className={step >= 1 ? "active num" : "num"}>1</div>
                  <div className={step >= 2 ? "active num" : "num"}>2</div>
                  <div className={step >= 3 ? "active num" : "num"}>3</div>
                </div>
                <div className="message">
                  Step - {step} {planning[step - 1]}
                </div>
                <div className="buttons">
                  <Button className="button"  click={handlePrev} ><span>👈</span><p style={{marginRight:'10px'}}>Prev</p></Button>
                  <Button className="button"  click={handleNext} ><p style={{marginLeft:'10px'}}>Next</p><span>👉</span></Button>
                </div>
              </div>
            )}
          </>
        );
}
