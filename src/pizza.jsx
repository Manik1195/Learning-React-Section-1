export function Pizza({ pizzaInfo }) {
  const { image, name, price, soldOut } = pizzaInfo;
  return (
    <>
      <div className="info">
        <img className={soldOut ? "image sold-out" : "image"} src={image} />
        <div className="details">
          <p className={soldOut ? "name sold-out" : "name"}>
            {name}
            {price >= 100 && price <= 120 && (
              <p
                style={{
                  backgroundColor: "black",
                  display: "inline-block",
                  color: "white",
                  padding: "0 10px",
                  fontSize: "10px",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
              >
                Regular
              </p>
            )}
            {price > 100 && price === 150 && (
              <p
                style={{
                  backgroundColor: "orange",
                  display: "inline-block",
                  color: "white",
                  padding: "0 10px",
                  fontSize: "10px",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
              >
                Medium
              </p>
            )}
            {price > 150 && (
              <p
                style={{
                  backgroundColor: "green",
                  display: "inline-block",
                  color: "white",
                  padding: "0 10px",
                  fontSize: "10px",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
              >
                Large
              </p>
            )}
          </p>
          {soldOut ? (
            <p className="price sold-out">SOLD OUT</p>
          ) : (
            <p className="price">{price}</p>
          )}
        </div>
      </div>
    </>
  );
}
