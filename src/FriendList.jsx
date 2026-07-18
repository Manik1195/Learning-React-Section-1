import { useState } from "react";
import { Button } from "./Button";
import { Friend } from "./Friend";
import { FriendForm } from "./FriendForm";
import { BillCalculator } from "./BillCalculator";

export function FriendList() {
  const Friends = [
    {
      id: 1,
      name: "Sivs",
    },
    {
      id: 2,
      name: "Aravaind",
    },
    {
      id: 3,
      name: "vichu",
    },

    {
      id: 4,
      name: "Mega",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(Friends);
  const [openBill, setOpenBill] = useState(false);
  const [friendId, setFriendId] = useState(0);
  const [billDetails, setBillDetails] = useState([]);
  function handleFriend() {
    console.log(isOpen);

    setIsOpen((p) => !p);
    console.log(isOpen);
  }
  function BillInfo(obj) {
    console.log(obj);
    if (billDetails.length > 0) {
      const bill = billDetails.find((bill) => bill.currentId === obj.currentId);
      console.log(bill);

      if (!bill) {
        setBillDetails([...billDetails, obj]);
        return;
      }
      const updatedBill = { ...bill };
      console.log(updatedBill);
      const updatedBills = billDetails.filter(
        (bill) => bill.currentId !== obj.currentId,
      );
      console.log(updatedBills);

      if (updatedBill.billPayBy === obj.billPayBy) {
        if (updatedBill.billPayBy === "You") {
          updatedBill.friendExpense += obj.friendExpense;
        } else {
          updatedBill.yourExpense += obj.yourExpense;
        }
      } else {
        if (updatedBill.billPayBy === "You") {
          console.log("last time i paid");

          if (updatedBill.friendExpense >= obj.yourExpense) {
            updatedBill.friendExpense -= obj.yourExpense;
            console.log(updatedBill);

            if (updatedBill.friendExpense === 0) {
              setBillDetails(updatedBills);
              return;
            }
          } else {
            console.log("i owe to sivs");

            updatedBill.yourExpense =
              obj.yourExpense - updatedBill.friendExpense;

            if (updatedBill.yourExpense === 0) {
              setBillDetails(updatedBills);
              return;
            }
            updatedBill.billPayBy = obj.billPayBy;
            console.log(updatedBill);
          }
        } else {
          if (updatedBill.yourExpense >= obj.friendExpense) {
            updatedBill.yourExpense =
              updatedBill.yourExpense - obj.friendExpense;
            console.log(updatedBill);
            if (updatedBill.yourExpense === 0) {
              setBillDetails(updatedBills);
              return;
            }
          } else {
            updatedBill.friendExpense =
              obj.friendExpense - updatedBill.yourExpense;

            if (updatedBill.friendExpense === 0) {
              setBillDetails(updatedBills);
              return;
            }

            updatedBill.billPayBy = obj.billPayBy;
            console.log(updatedBill);
          }
        }
      }
      setBillDetails([...updatedBills, updatedBill]);
    } else {
      console.log(obj);

      setBillDetails([...billDetails, obj]);
    }
  }
  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setIsOpen((p) => !p);
  }
  console.log(friends);
  console.log(billDetails);

  return (
    <>
      <div className="friend-container">
        <div className="friends">
          {friends.map((friend) => (
            <Friend
              friend={friend}
              key={friend.id}
              handleBill={setOpenBill}
              handlefriendId={setFriendId}
              billDetail={billDetails}
              friendId={friendId}
            />
          ))}
          {!isOpen && (
            <div className="friend-button">
              <Button click={handleFriend} className="friend-btn">
                Add Friend
              </Button>
            </div>
          )}
          {isOpen && (
            <div className="friend-form">
              <FriendForm
                setIsOpen={setIsOpen}
                handleAddFriend={handleAddFriend}
              />
            </div>
          )}
        </div>
        {openBill && (
          <BillCalculator
            id={friendId}
            key={friendId}
            friends={friends}
            billSubmit={BillInfo}
            handleBill={setOpenBill}
          />
        )}
      </div>
    </>
  );
}
