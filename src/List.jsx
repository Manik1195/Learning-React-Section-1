import { useState } from "react";
import { Trip } from "./Trip";

export function List({ list, func, handleChange }) {
  const [search, setSearch] = useState("");
  const sortItems =
    search === ""
      ? list
      : list.filter((trip) =>
          trip.destination.includes(search),
        );
  

  //   const TourPlans = [
  //     { id: 1, destination: "Munnar", Days: 3, Budget: 4500, packaged: false },
  //     { id: 2, destination: "Ooty", Days: 3, packaged: false, Budget: 5000 },
  //     { id: 3, destination: "Valparai", Days: 2, packaged: true, Budget: 3500 },
  //     { id: 4, destination: "Kodaikanal", packaged: true, Budget: 4500 },
  //   ];
  //   const [Tours, setTours] = useState(TourPlans);
  //   function changePackaged(id) {
  //     console.log(id);

  //     const tour = Tours.map((tour) => tour.id == id);
  //     console.log(tour);
  //   }
  console.log(search);

  return (
    <>
      <div className="list-container">
        <div className="list">
          <ul>
            {sortItems.map((tour) => (
              <li key={tour.id}>
                <Trip
                  trip={tour}
                  key={tour.id}
                  func={func}
                  handleChange={handleChange}
                />
              </li>
            ))}
          </ul>
        </div>
        <div  className="list-input">
          <input
            type="text"
            placeholder="search..."
            value={search}
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
