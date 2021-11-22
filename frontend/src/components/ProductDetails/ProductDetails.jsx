import React from "react";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ product }) => {
  const { product_name, category, quantity, price, sale_price } = product;
  return (
    <div>
      {product ? (
        <div className="product-item-wrapper">
          <div>
            <span>{product_name}</span>
            <span>Product Name</span>
          </div>
          <div>
            <span>{category}</span>
            <span>Category</span>
          </div>
          <div>
            <span>{quantity}</span>
            <span>Quanity</span>
          </div>
          <div>
            <span>{price}</span>
            <span>Price</span>
          </div>
          <div>
            <span>{sale_price}</span>
            <span>Sale Price</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faPencilAlt}
              title="Edit"
              className="tooltip"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faTrashAlt}
              title="Delete"
              className="tooltip"
            />
          </div>
        </div>
      ) : (
        "No products to display"
      )}
    </div>
  );
};

export default ProductDetails;
