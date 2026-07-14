import { useState } from "react";
import { Button } from "./Button";

export function Friend({ friend, handleBill, handlefriendId ,billDetail}) {
    console.log(billDetail);
    console.log(friend.id);
    
  function handleBillOpen(id) {
    handleBill(true);
    handlefriendId(id)
    console.log(id);
    
  }
  return (
    <>
      <div className="card-friend">
        <div className="bill-info">
          <div className="friend-name">
            <span>{friend.id < 10 ? `0${friend.id}` : friend.id}</span>
            <p>{friend.name}</p>
          </div>

          <div className="bill-detail">
            
              <p>Hi</p>
          </div>
        </div>
        <div>
          <Button
            className="friend-btn"
            click={() => handleBillOpen(friend.id)}
          >
            Select
          </Button>
        </div>
      </div>
    </>
  );
}