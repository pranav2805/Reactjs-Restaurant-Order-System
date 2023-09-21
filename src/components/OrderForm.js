import React, { useState } from "react";

const OrderForm = (props) => {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDish, setEnteredDish] = useState("");
  const [enteredTable, setEnteredTable] = useState("Table1");

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dishChangeHandler = (event) => {
    setEnteredDish(event.target.value);
  };
  const tableChangeHandler = (event) => {
    // console.log("Table>>>", event.target.value);
    setEnteredTable(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const orderData = {
      id: +enteredId,
      price: enteredPrice,
      dish: enteredDish,
      table: enteredTable,
    };

    // console.log(orderData);
    localStorage.setItem(enteredId, JSON.stringify(orderData));
    props.onAddOrder(orderData);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="id">Choose id:</label>
      <input type="number" id="id" onChange={idChangeHandler}></input>
      <label htmlFor="price">Choose price:</label>
      <input type="text" id="price" onChange={priceChangeHandler}></input>
      <label htmlFor="dish">Choose dish:</label>
      <input type="text" id="dish" onChange={dishChangeHandler}></input>
      <label>Choose table:</label>
      <select onChange={tableChangeHandler}>
        <option>Table1</option>
        <option>Table2</option>
        <option>Table3</option>
      </select>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
