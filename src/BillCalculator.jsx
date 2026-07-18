import { useState } from "react";
import { Button } from "./Button";

export function BillCalculator({ id, friends, billSubmit, handleBill }) {
  const [amount, setAmount] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [billPayBy, setBillPayBy] = useState("");

  function handleBillSubmit(e) {
    e.preventDefault();
    const obj = {
      billAmount: amount,
      yourExpense: myExpense,
      friendExpense: friendExpense,
      billPayBy: billPayBy === "" ? "You" : billPayBy,
      currentId: id,
    };
    console.log(obj);

    billSubmit(obj);
    handleBill(false);
  }
  function handleBillClose() {
    handleBill(false);
  }

  const selectedFriend = friends.find((friend) => friend.id == id);
  return (
    <>
      <div className="bill-card">
        <h2>Bill Calculator</h2>
        <form className="bill-form" onSubmit={handleBillSubmit}>
          <div className="form-items">
            <label>Bill amount</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="form-items">
            <label>Your expense</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={myExpense}
              onChange={(e) => {
                const yourExpense = Number(e.target.value);
                setMyExpense(yourExpense);
                setFriendExpense(amount - yourExpense);
              }}
            />
          </div>
          <div className="form-items">
            <label>Your friend expense</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={friendExpense}
            />
          </div>
          <div className="form-items">
            <label>Who is going to pay bill?</label>
            <select
              value={billPayBy}
              onChange={(e) => setBillPayBy(e.target.value)}
            >
              <option value="You">You</option>
              {selectedFriend && (
                <option value={selectedFriend.id}>{selectedFriend.name}</option>
              )}
            </select>
          </div>
          <div className="button-bill">
            <Button className="pay">Pay</Button>
            <Button className="close-pay" click={handleBillClose}>
              Close
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
