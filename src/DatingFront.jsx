import { useState } from "react"
import { DateOkey } from "./DateOkay";

export function DatingFront() {
    const[yesClicked,setYesClicked]=useState(false)
    console.log(yesClicked);
    
  return (
    <>
    {!yesClicked ?(
      <div className="date-card">
        <div className="card-content">
        <img  className='image' src="./assets/dog.jpg" />
        <p>🌸 Will you come for a Date with me 🌸</p>
        <div className="date-button">
          <button onClick={()=>setYesClicked(true)} className="yes">Yes</button>
          <button className="yes">No</button>
        </div>
        </div>
      </div>
    ):
    <DateOkey/>
    }
    </>
  );
}
