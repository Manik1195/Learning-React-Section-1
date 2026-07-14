import { useState } from "react";
import { Button } from "./Button";

export function FriendForm({setIsOpen,handleAddFriend}){
    const [id,setId]=useState(0)
    const[name,setName]=useState('')
    function handleFriend(e){
        e.preventDefault();
        console.log(id);
        console.log(name);
        
        
       const newFriend={id:id,name:name}
       handleAddFriend(newFriend)
    }
    function handleCloseForm(){
         setIsOpen(p=>!p)
      
    }
    return (
      <>
        <form className="friend-form" onSubmit={handleFriend}>
          <Button className="btn-close" click={handleCloseForm}>
            ❌
          </Button>
          <div className="form-groups">
            <label>Id</label>
            <input
              type="text"
              placeholder="Enter Id"
              value={id}
              onChange={(e) => setId(Number(e.target.value))}
            />
          </div>
          <div className="form-groups">
            <label>Name</label>
            <input
              type="text"
              placeholder="Entet name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="friend-Formbutton">
            <button className="friend-btn">Add Friend</button>
          </div>
        </form>
      </>
    );
}