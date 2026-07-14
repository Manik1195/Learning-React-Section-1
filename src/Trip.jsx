import { useState } from "react";

export function Trip({ trip, func, handleChange }) {
 
  return (
    <>
      
      <div className="trip">
        <div className="btn">
          <button onClick={() => func(trip.id)}>❌</button>
        </div>
        <div className="check">
          <input
            type="checkbox"
            value={trip.packed}
            onChange={() => handleChange(trip.id)}
          />
          <p style={trip.packed ? { textDecoration: "line-through" } : {}}>
            {trip.destination}
          </p>
        </div>
        <p>{trip.days}</p>
        <p>{trip.budget}</p>
      </div>
    </>
  );
}
