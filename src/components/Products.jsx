import { Row } from "antd";
import React from "react";
import Product from "./Product";

//Gutters are the gaps between column content, created by horizontal padding
const Products = ({ productsData }) => {
  return (
    <Row gutter={[16, 16]}>
      {productsData?.map((productItem) => (
        <Product productData={productItem} key={productItem.id} />
      ))}
    </Row>
  );
};

export default Products;
