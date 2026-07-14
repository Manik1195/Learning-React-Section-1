import { useState } from "react";
import { BillInput } from "./billInput";
import { BillService } from "./billservice";
import { Button } from "./Button";
import { Total } from "./Total";

export function Bill(){
    const [amount,setAmount]=useState('')
    const[yourReview,setYourReview]=useState('')
    const[yourFriendReview,setYourFriendReview]=useState('')
    
    function handleReset(){
        setAmount('')
        setYourReview('')
        setYourFriendReview('')
    }
    const yourTip = Number(yourReview.match(/\d+/)?.[0] || 0);
    const friendTip = Number(yourFriendReview.match(/\d+/)?.[0] || 0);
    const tip = ((amount * (yourTip + friendTip)) / 100)/2;
    console.log(tip);
    

    const options=['It was OK(5%)','It was good(10%)','It was Amazing(20%)']
    return (
      <>
        <div className="form-bill">
          <BillInput handleBill={setAmount} amount={amount} />
          <BillService
            label="How did You like the service?"
            options={options}
            value={yourReview}
            handleService={setYourReview}
          />
          <BillService
            label="How did Your friend liked the service?"
            options={options}
            value={yourFriendReview}
            handleService={setYourFriendReview}
          />
          <Button className='reset'  click={handleReset}><span>Reset🧹</span></Button>
          {tip>0 &&(
          <Total amount={amount} tip={tip}/>
          )}    
        </div>
      </>
    );

}