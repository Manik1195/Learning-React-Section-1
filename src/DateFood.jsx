import { useState } from "react";
import { DateConfirm } from "./DateConfirm";

export function DateFood({date,time}){
    const[foodSelected,setFoodSelected]=useState(false)
    const[food,setFood]=useState('')
    function pizzaClick(){
        setFoodSelected(true)
        setFood('pizza')
    }
    function burgerClick(){
          setFoodSelected(true);
          setFood("burger");
    }
    function pastaClick(){
      setFoodSelected(true)
        setFood('pasta')
    }
    function desertClick() {
      setFoodSelected(true);
      setFood("desert");
    }
    function milkClick() {
      setFoodSelected(true);
      setFood("milkshake");
    }
   function pastryClick() {
     setFoodSelected(true);
     setFood("pastry");
   }
    return (
      <>
        {!foodSelected ? (
          <div className="date-card">
            <div className="card-content">
              <p style={{ fontSize: "30px", color: "#c0149b" }}>
                What are we feeling? 🍽️
              </p>
              <span>Pick ur vibe</span>
              <div className="food-menu">
                <div className="food">
                  <button onClick={pizzaClick}>🍕</button>
                  <p>pizza</p>
                </div>
                <div className="food">
                  <button onClick={burgerClick}>🍔</button>
                  <p>burger</p>
                </div>
                <div className="food">
                  <button onClick={pastaClick}>🍝</button>
                  <p>pasta</p>
                </div>
                <div className="food">
                  <button onClick={desertClick}>🍨</button>
                  <p>desert</p>
                </div>
                <div className="food">
                  <button onClick={pastryClick}>🎂</button>
                  <p>pastry</p>
                </div>
                <div className="food">
                  <button onClick={milkClick}>🥤</button>
                  <p>milkshakes</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <DateConfirm date={date} time={time} food={food} />
        )}
      </>
    );
}