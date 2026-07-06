import { useState } from "react";
import { DateOkey } from "./DateOkay";
import { DateReject } from "./DateReject";

export function DatingFront() {
  const [yesClicked, setYesClicked] = useState(false);
  console.log(yesClicked);
  const [modal, setModal] = useState(false);
  function success(){
    setModal(false)
    setYesClicked(true)
  }

  return (
    <>
      {!yesClicked ? (
        <div className={modal?'content-blur':'date-card'}>
          <div className="card-content">
            <img className="image" src="./assets/dog.jpg" />
            <p>🌸 Will you come for a Date with me 🌸</p>
            <div className="date-button">
              <button onClick={() => setYesClicked(true)} className="yes">
                Yes
              </button>
              <button className="yes" onClick={() => setModal(true)}>
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <DateOkey />
      )}
      {modal && <DateReject close={() => setModal(false)} success={success} />}
    </>
  );
}
