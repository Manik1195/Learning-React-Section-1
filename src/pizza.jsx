export function Pizza({ pizzaInfo }) {
  const { image, name, price, soldOut } = pizzaInfo;
  return (
    <>
      <div className='info'>
        <img className={soldOut ? "image sold-out" : "image"} src={image} />
        <div className="details">
          <p className={soldOut ? "name sold-out" : "name"}>{name}</p>
          {soldOut?<p className='price sold-out'>SOLD OUT</p>:<p className="price">{price}</p>}
        </div>
      </div>
    </>
  );
}
