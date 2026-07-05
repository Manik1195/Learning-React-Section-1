import { useState } from "react";
export function Shop() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    oldPrice: "",
    newPrice: "",
  });
  const [products, setProducts] = useState([]);
  function addProduct() {
    console.log(product);
    if (
      product.name == "" ||
      (product.name == undefined && product.category == "") ||
      product.category == undefined ||
      product.oldPrice == "" ||
      product.oldPrice == undefined ||
      product.newPrice == "" ||
      product.newPrice == undefined
    ) {
      alert("All field should fill");
      return;
    }
    setProducts([...products, product]);
    setProduct({
      name: "",
      category: "",
      oldPrice: "",
      newPrice: "",
    });
  }
  return (
    <>
      <div className="user-container">
        <h2>Shop</h2>
        <div class="user-form">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="input"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div class="user-form">
          <label>Category:</label>
          <input
            type="text"
            placeholder="Enter category name"
            className="input"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
        </div>
        <div class="user-form">
          <label>Old Price:</label>
          <input
            type="text"
            placeholder="Enter old price"
            className="input"
            value={product.oldPrice}
            onChange={(e) =>
              setProduct({ ...product, oldPrice: e.target.value })
            }
          />
        </div>
        <div class="user-form">
          <label>New Price:</label>
          <input
            type="text"
            placeholder="Enter new price"
            className="input"
            value={product.newPrice}
            onChange={(e) =>
              setProduct({ ...product, newPrice: e.target.value })
            }
          />
        </div>
        <div class="buttons">
          <button onClick={addProduct}>Submit</button>
        </div>
      </div>
      <div className="shop-cards">
        {products.map((pro) => (
          <div className="shop-card">
            <div className="pro-name">
              <p>
                Product-Name <span className="product-name"> {pro.name}</span>
              </p>
              <p>
                Product-category{" "}
                <span className="product-category">{pro.category}</span>
              </p>
            </div>
            <div className="prices">
              <p>
                Old-price:
                <span className="product-oldPrice">₹{pro.oldPrice}</span>
              </p>
              <p>
                Buy@<span className="product-newPrice">{pro.newPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
