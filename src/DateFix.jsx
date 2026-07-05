import { useState } from "react";
import { DateFood } from "./DateFood";

export function DateFix(){
    const [date,setDate]=useState('')
    const[time,setTime]=useState('')
    const[confirmClicked,setConfirmClicked]=useState(false)
    console.log(date);
    console.log(time);
    
    
    return (
      <>
      {!confirmClicked?(
        <div className="date-card">
          <div className="card-content">
            <img
              style={{ height: "80px", width: "80px" }}
              className="image"
              src="./assets/calendar.jpg"
            />
            <p
              style={{
                letterSpacing: "1.2px",
                color: "#c0149b",
                fontSize: "28px",
                fontWeight: "600",
              }}
            >
              So...When are you free?
            </p>
          </div>
          <div className="date-form">
            <div className="form-group">
              <label>Pick a day📅</label>
              <input
                type="date"
                className="date-input"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Select time⌚</label>
              <select className="date-input" onChange={(e)=>setTime(e.target.value)}>
                <option value="12:00-1:00">12:00-1:00</option>
                <option value="1:00-2:00">1:00-2:00</option>
                <option value="4:00-5:00">4:00-5:00</option>
                <option value="5:00-6:00">5:00-6:00</option>
                <option value="6:00-7:00">6:00-7:00</option>
              </select>
            </div>
          </div>
          <div
            className="date-button"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              style={{ width: "150px" }}
              onClick={() => setConfirmClicked(true)}
              className="yes"
            >
              Confirm Date!→
            </button>
          </div>
        </div>
      ):(
       <DateFood date={date} time={time}/>
      )}
      </>
    );
}