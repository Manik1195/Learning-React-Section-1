import { useState } from "react";
import "./App.css";

import "./index.css";
import { Users } from "./users";
import { Shop } from "./shop";
import { DatingFront } from "./DatingFront";
import { Button } from "./Button";
import { Counter } from "./Counter";
import { Title } from "./Title";
import { Form } from "./Form";
import { List } from "./List";
import { Footer } from "./Footer";
import { QA } from "./QA";
import Accord from "./Accord";
import { Steps } from "./Steps";
import { Bill } from "./bill";
import { FriendList } from "./FriendList";
const planning = ["Learn React🎯", "Learn Node 🥇", "Built Project🏆"];

function App() {
  const [step, setStep] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [isNotClicked, setIsNotClicked] = useState(true);
  const [count, setCount] = useState(0);
  const [Trips, setTrips] = useState([]);
  function handleAdd(item) {
    setTrips([...Trips, item]);
  }
  function handleDelete(id) {
    const updatedTrips = Trips.filter((trip) => trip.id !== id);
    setTrips(updatedTrips);
  }
  function handleChange(id){
   setTrips(items=>items.map(item=>item.id===id?{...item,packed:!item.packed}:item))
  }

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
  function increment() {
    setCount((p) => p + 1);
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
   {/* <Steps/> */}
    {/* <Users/>  */}
      {/* <Shop/> */}
      {/* <DatingFront/> */}
      {/* <Counter/> */}
      {/* <div className="app">
        <Title />
        <Form handleAdd={handleAdd} />
        <List list={Trips} func={handleDelete} handleChange={handleChange} />

        <Footer list={Trips} />
      </div> */}
      {/* <div className="app">
      <Accord/>
      </div> */}
      {/* <QA/> */}
      {/* <Bill/> */}
      <FriendList/>

      {/* <Button name='Click' className='primary' click={increment} />
      <p>{count}</p> */}
      {/* <Button name="Next" variant={success} />
      <Button name="Prev" variant={warning} /> */}
    </>
  );
}

export default App;
