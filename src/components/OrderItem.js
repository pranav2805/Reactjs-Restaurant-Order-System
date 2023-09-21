import React from "react";

const OrderItem = (props) => {
  const deleteHandler = (id, table) => {
    props.onDeleteOrder(id, table);
  };
  return (
    <li>
      {props.id} {props.price} {props.dish}
      <button
        type="submit"
        onClick={() => deleteHandler(props.id, props.table)}
      >
        Delete
      </button>
    </li>
  );
};

export default OrderItem;
