export function BillInput({handleBill,amount}){

  console.log(amount);
  
    return(
        <>
        <div className="input-form">
            <label>Enter amount</label>
            <input type='text' placeholder='Enter amount' value={amount} onChange={e=>handleBill(Number(e.target.value))}/>
        
        </div>
        </>
    )
}