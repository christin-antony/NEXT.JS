"use client";
import React from 'react';
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p style={{ textAlign: "center", fontSize: '30px' }}>Simple NEXTJS example</p>
      <p style={{ textAlign: "center", fontSize: "50px", marginBottom: "200px" }}>{count}</p>
      <div style={{ display: "flex", gap: '200px', justifyContent: "center" }}>
        <button onClick={increment} style={{ width: "200px", height: "50px", color: "white", backgroundColor: "green" }}>+</button>
        <button onClick={decrement} style={{ width: "200px", height: "50px", color: "white", backgroundColor: "red" }}>-</button>
      </div>
    </div>
  );
};

export default Home;
