export function Footer({list}){
    if(!list.length) return <p className='footer'style={{textAlign:'center',color:'#fff',wordSpacing:'2px',fontWeight:'600'}}><em> Please! Start adding some Trips🌴</em></p>
    const qty=list.length;
    const newList=list.filter(trip=>trip.packed)
    const packedList=newList.length
    const percent=Math.round(packedList/qty *100)

    return (
      <>
        <div className="footer">
          {percent === 100 ? (
            <p style={{ color: "#fff", fontWeight: "600" }}>
              <em>You are ready to fly now ✈️</em>
            </p>
          ) : (
            <p style={{ color: "#fff", fontWeight: "600" }}>
              <em>
                You have{" "}
                <span
                  style={{
                    color: '#444',
                    fontWeight: "600",
                    fontSize: "22px",
                  }}
                >
                  {qty}
                </span>{" "}
                bucket list and{" "}
                <span
                  style={{ color: "red", fontWeight: "600", fontSize: "22px" }}
                >
                  {packedList}
                </span>{" "}
                packed list{"  "} and packed percentage is{" "}
                <span
                  style={{ color: "beige", fontWeight: "600", fontSize: "22px" }}
                >
                  {percent}%
                </span>
                ✈️
              </em>
            </p>
          )}
        </div>
      </>
    );
}