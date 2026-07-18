import { useState } from "react";
import { Button } from "./Button";

export function Friend({ friend, handleBill, handlefriendId, billDetail }) {
  console.log(`${friend.id}st friend component renders,${billDetail}`);
  console.log(`${friend.id}st friend component renders`);
  console.log(billDetail);

  function handleBillOpen(id) {
    handleBill(true);
    handlefriendId(id);
    console.log(id);
  }
  let billInfo;
  if (billDetail.length > 0) {
    const bills = billDetail.find((bill) => bill.currentId == friend.id);
    if (bills) {
      billInfo =
        bills.billPayBy === "You"? bills.friendExpense === 0?`you and ${friend.name} are even`:`${friend.name} owes you 
      ₹${bills.friendExpense}`
      :bills.yourExpense===0?`you and ${friend.name} are even`:
          `You owes ${friend.name} ${bills.yourExpense}`;
    } else {
      billInfo = `You and ${friend.name} are even`;
    }
  } else {
    billInfo = `You and ${friend.name} are even`;
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
            <p> {billInfo}</p>
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
