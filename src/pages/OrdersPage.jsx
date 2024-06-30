// import React from "react";
import ProductStatus from "../components/ProductStatus";
import Header from "../components/Header";
import OrderActions from "../components/OrderActions";
import SearchOrders from "../components/SearchOrders";

const OrdersPage = () => {
  return (
    <div>
      <Header />
      <hr />
      <SearchOrders />
      <OrderActions />
      <ProductStatus />
    </div>
  );
};

export default OrdersPage;
