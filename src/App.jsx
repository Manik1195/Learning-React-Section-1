import "./App.css";
import { useEffect, useState } from "react";
import "./index.css";
import { Pizza } from "./pizza";

function App() {
  const skill = [
    {
      id: 1,
      skill: "Photo Editing",
      backcolor: "#e42d2d",
    },
    {
      id: 2,
      skill: "Portrait Photography",
      backcolor: "#e57e11",
    },
    {
      id: 3,
      skill: "Macro Photography",
      backcolor: "#c0b40b",
    },
    {
      id: 4,
      skill: "Creativity",
      backcolor: "#7dd413",
    },
    {
      id: 5,
      skill: "Lighting",
      backcolor: "#0957b1",
    },
    {
      id: 6,
      skill: "Landscape Photography",
      backcolor: "#be0b0b",
    },
  ];
  const pizzaData = [
    {
      name: "focaccia",
      image: "./assets/focaccia.jpg",
      price: 100,
      soldOut:false
    },
    {
      name: "funghi",
      image: "./assets/funghi.jpg",
      price: 120,
      soldOut:false
    },
    {
      name: "margherita",
      image: "./assets/margherita.jpg",
      price: 150,
      soldOut:true
    },
    {
      name: "prosciutto",
      image: "./assets/prosciutto.jpg",
      price: 200,
      soldOut:true
    },
  ];
  const pizzas = pizzaData;
  const num = pizzas.length;
  console.log(num);

  return (
    // <div className="section">
    //   <div className="main">
    //     <Avatar />
    //     <Info />
    //     <div className="skill">
    //       {skill.map((skill) => {
    //         return (
    //           <Skills
    //             id={skill.id}
    //             skill={skill.skill}
    //             color={skill.backcolor}
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    <>
      <h2
        className="pizza-menu"
        style={{
          display: "inline-block",
          borderTop: "2px solid",
          borderBottom: "2px solid",
          padding: "5px",
          marginLeft: "700px",
        }}
      >
        Our Menu
      </h2>
      {num > 0 ? (
        <div className="pizza-main">
          {pizzas.map((pizza) => (
            <Pizza pizzaInfo={pizza} key={pizza.name} />
          ))}
        </div>
      ) : (
        <p>Sorry No Pizzas</p>
      )}
      <Footer />
    </>
  );
}
function Avatar() {
  return (
    <div className="avatar">
      <img
        src="./public/assets/man.jpg"
        style={{ height: 700, width: "100%" }}
      />
    </div>
  );
}
function Info() {
  const name = "Manik";
  const content =
    "Photography is the art and practice of capturing moments through a camera. It allows people to preserve memories, express creativity, and tell stories without using words. From landscapes and portraits to wildlife and street scenes, photography helps us see the world from different perspectives. Every photograph captures a unique moment that can never be repeated in exactly the same way.";
  return (
    <div className="info">
      <h2>{name}</h2>
      <p>{content}</p>
    </div>
  );
}
function Skills(props) {
  return (
    <div key={props.id}>
      <p style={{ backgroundColor: props.color }}>{props.skill}</p>
    </div>
  );
}
export function Footer() {
  const hour = new Date().getHours();
  const openHour = 19;
  const closeHour = 22;
  const isOpen = openHour <= hour && closeHour >= hour;

  return (
    <div
      className="footer"
      style={{
        textAlign: "center",
        fontWeight: "600",
        width: "1500px",
        marginLeft: "20px",
      }}
    >
      {isOpen ? <p>We are open</p>:<Order open={openHour} close={closeHour}/>}
    </div>
  );
}
function Order({open,close}){
  return(
    <>
    <p>We are happily welcoming you between  {open}:00 and  {close}:00.</p>
    </>
  )
}

export default App;
