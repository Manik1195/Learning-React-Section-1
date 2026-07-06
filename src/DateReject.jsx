export function DateReject({ close, success }) {
  return (
    <>
      <div className="date-alert">
        <div className="card-alert">
            <span>Rejection alert?</span>
          <p style={{fontSize:'20px'}}>Do u seriously want to reject my Date?🥲</p>
          <div className="button">
            <button style={{backgroundColor:'red',color:'#fff'}} onClick={close}>Yes</button>
            <button style={{backgroundColor:'green',color:'#fff'}} onClick={success}>No</button>
          </div>
        </div>
      </div>
    </>
  );
}
