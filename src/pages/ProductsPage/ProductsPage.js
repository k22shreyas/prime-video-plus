import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);
  console.log(cartItems);

  const navigate = useNavigate();
  const handleClick = () => navigate("/prime-video");

  // API Url: https://fakestoreapi.com/products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    addToCart([...cartItems, product]);
  };

  return (
    <div className="row">
      <div className="row">
      <div className="col-md-10 mb-3">
      <h1>Shop our Products</h1>
      </div>
      <div className="col-md-2 mb-3">
      <button className="btn btn-primary col-12 mt-2" onClick={handleClick}>
          Watch Prime Video
        </button>
      </div>
      </div>
      {products.map((product) => {
        return (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title} | {product.category}
                </h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price ${product.price}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddToCart.bind(this, product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;