import { useState } from "react";


export function Form({ handleAdd }) {
  const [days, setDays] = useState(1);
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { days, destination, budget,packed:false, id: Date.now() };
    handleAdd(newItem)
    setDays(1)
    setDestination(''),
    setBudget('')

  }
    return (
      <>
        <div className="heading">
          <h2>What do you need for ur trip?😍</h2>
          <form className="form-data" onSubmit={handleSubmit}>
            <select
              className="form-input"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option className="form-option" value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="form-input"
              placeholder="dest..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            ></input>
            <input
              type="text"
              className="form-input"
              placeholder="budget.."
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            ></input>
            <button>Add</button>
          </form>
        </div>
       
      </>
    );
  }

