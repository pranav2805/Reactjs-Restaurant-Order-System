import React from "react";
import OrderItem from "./OrderItem";

const Orders = (props) => {
  const deleteOrder = (id, table) => {
    props.onDeleteOrderApp(id, table);
  };
  return props.orders.map((order) => {
    return (
      <OrderItem
        key={order.id}
        id={order.id}
        price={order.price}
        dish={order.dish}
        table={order.table}
        onDeleteOrder={deleteOrder}
      ></OrderItem>
    );
  });
};

export default Orders;
