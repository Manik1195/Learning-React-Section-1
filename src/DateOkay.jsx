import { useState } from "react";
import { DateFix } from "./DateFix";

export function DateOkey(){
    const[okayClicked,setOkayclicked]=useState(false)
return (
  <>
  {!okayClicked ?(
    <div className="date-card">
      <div className="card-content">
        <img className="image" src="./assets/heart.jpg" />
        <p style={{letterSpacing:'1.2px'}}>WAIT YOU ACTUALLY SAID YES??</p>
        <span style={{ fontSize: "14px" }}>
          I was so ready for u to say no😂
        </span>
        <div className="date-button">
          <button style={{width:'150px'}} onClick={() => setOkayclicked(true)} className="yes">
            Okay Okay!→ 
          </button>
        </div>
      </div>
    </div>
  ):(
    <DateFix/>
  )}
  </>
);
}