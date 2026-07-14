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
  const[openBill,setOpenBill]=useState(false)
  const[friendId,setFriendId]=useState(0)
  const[billDetails,setBillDetails]=useState([])
  function handleFriend() {
    console.log(isOpen);

    setIsOpen((p) => !p);
    console.log(isOpen);
  }
   function BillInfo(obj) {
    console.log(obj);
    
     setBillDetails([...billDetails,obj]);
   }
  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setIsOpen((p) => !p);
  }
  console.log(friends);

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
            friends={friends}
            billSubmit={BillInfo}
            handleBill={setOpenBill}
          />
        )}
      </div>
    </>
  );
}
