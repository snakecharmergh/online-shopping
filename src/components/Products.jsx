import { Row } from "antd";
import React from "react";
import Product from "./Product";

//Gutters are the gaps between column content, created by horizontal padding
const Products = () => {
  return (
    <Row gutter={[16, 16]}>
      <Product />
    </Row>
  );
};

export default Products;
