import React, { useState } from "react";

import "./App.css";
import OrderForm from "./components/OrderForm";
import Orders from "./components/Orders";

// const table1 = [];
// const table2 = [];
// const table3 = [];

function App() {
  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);
  const [table3, setTable3] = useState([]);

  const addOrderHandler = async (order) => {
    // console.log(order);
    if (order.table.toLowerCase() === "table1") {
      setTable1((prevOrders) => {
        return [order, ...prevOrders];
      });
    } else if (order.table.toLowerCase() === "table2") {
      setTable2((prevOrders) => {
        return [order, ...prevOrders];
      });
    } else if (order.table.toLowerCase() === "table3") {
      setTable3((prevOrders) => {
        return [order, ...prevOrders];
      });
    }
  };

  const deleteHandler = (id, table) => {
    if (table.toLowerCase() === "table1") {
      const index = table1.findIndex((order) => id === order.id);
      const updatedOrders = [...table1];
      updatedOrders.splice(index, 1);
      setTable1(updatedOrders);
    } else if (table.toLowerCase() === "table2") {
      const index = table2.findIndex((order) => id === order.id);
      const updatedOrders = [...table2];
      updatedOrders.splice(index, 1);
      setTable2(updatedOrders);
    }
    if (table.toLowerCase() === "table3") {
      const index = table3.findIndex((order) => id === order.id);
      const updatedOrders = [...table3];
      updatedOrders.splice(index, 1);
      setTable3(updatedOrders);
    }
    localStorage.removeItem(id);
  };

  return (
    <React.Fragment>
      <OrderForm onAddOrder={addOrderHandler}></OrderForm>
      <label htmlFor="table1">Table 1</label>
      <Orders
        key={1}
        orders={table1}
        id="table1"
        onDeleteOrderApp={deleteHandler}
      />
      <br />
      <label htmlFor="table2">Table 2</label>
      <Orders
        key={2}
        orders={table2}
        id="table2"
        onDeleteOrderApp={deleteHandler}
      />
      <br />
      <label htmlFor="table3">Table 3</label>
      <Orders
        key={3}
        orders={table3}
        id="table3"
        onDeleteOrderApp={deleteHandler}
      />
    </React.Fragment>
  );
}

export default App;
