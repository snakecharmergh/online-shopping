import { Row } from "antd";
import React from "react";
import Product from "./Product";

//Gutters are the gaps between column content, created by horizontal padding
const Products = ({ productsData, cart, setCart }) => {
  return (
    <>
      {productsData?.map((productItem) => (
        <Product
          productData={productItem}
          cart={cart}
          setCart={setCart}
          key={productItem.id}
        />
      ))}
    </>
  );
};

export default Products;
