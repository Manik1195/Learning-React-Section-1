  import { useState } from "react";
  import { Question } from "./Question";

  export default function Accord(){
      const items = [
        {
          id: 1,
          question: "Which is the biggest continent in the world?",
          answer:
            "Asia shares the landmass of Eurasia with Europe, and of Afro-Eurasia with both Europe and Africa. In general terms, it is bounded on the east by the Pacific Ocean, on the south by the Indian Ocean, and on the north by the Arctic Ocean.",
        },
        {
          id: 2,
          question: "Which is the tallest building in the world?",
          answer:
            "Construction of the Burj Khalifa began in 2004; the exterior was completed five years later. The primary structure is reinforced concrete. Some of the structural steel for the building was salvaged from the demolished Palace of the Republic in East Berlin",
        },
        {
          id: 3,
          question: "which is the biggest city in india?",
          answer:
            " Delhi shares borders with the state of Uttar Pradesh in the east and with the state of Haryana in the remaining directions. ",
        },
      ];
      const[selectedId,setSelectedId]=useState('')
      function handleAccord(id){
            
             setSelectedId(value=>value!==id?id:'')
       
      }
      return(
          <>
          <div className="Accord-component">
              {items.map(item=>(
                  <Question item={item} key={item.id} func={handleAccord} selectedId={selectedId}/>
              ))}
          </div>
          </>
      )
  }