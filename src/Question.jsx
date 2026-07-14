import { useState } from "react";

export function Question({ item, func, selectedId }) {
 
  function click(id) {
    
    func(id);
  }

  return (
    <>
      <div
        style={
          selectedId === item.id 
            ? { borderTop: "5px solid green" }
            : {}
        }
        className="accord-qa"
      >
        <div className="que" onClick={() => click(item.id)}>
          <p
            style={selectedId === item.id ? { color: "green" } : {}}
          >
            {item.id < 10 ? `0${item.id}` : item.id}
          </p>
          <p
            style={selectedId === item.id  ? { color: "green" } : {}}
            className="ques"
          >
            {item.question}
          </p>
          <p>{selectedId === item.id ? "-" : "+"}</p>
        </div>
        <div
          className={`accord-ans ${selectedId === item.id ? "open" :""}`}
        >
          <p>{item.answer}</p>
        </div>
      </div>
    </>
  );
}
