import { useState } from "react";
import { DatingFront } from "./DatingFront";

export function DateConfirm({ date, time, food }) {
    const[back,setback]=useState(false)
  return (
    <>
      {!back ? (
        <div className="date-card">
          <div className="card-content">
            <p
              style={{ fontSize: "24px", color: "#ea2a90", fontWeight: "600" }}
            >
              glad,you didn't say no,be ready for {food} party on {date} by{" "}
              {time.split(":")[0]},I'm Coming to get you 🚗
            </p>
            <span
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "16px",
              }}
            >
              Thanks for the date,if u want to start from starting then click
              below
            </span>
            <div className="confirm-button">
              <button onClick={() => setback(true)}>
                {" "}
                <img src="./assets/heart1.jpg" />
                Get Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <DatingFront />
      )}
    </>
  );
}
