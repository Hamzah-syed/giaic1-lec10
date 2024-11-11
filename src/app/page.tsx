"use client"

import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0)


  function increment() {
    setCount(count + 1) // 6
  }

  function decrement() {
    setCount(count - 1) // 6
  }


  
  return (
    <>
      <button
        className="bg-blue-500 py-2 px-4"
        onClick={increment}>
        Increment
      </button>

      <button
      className="bg-red-500 py-2 px-4"
        onClick={decrement}>
        Decrement
      </button>
      
      <h2 className={count >= 10 ? 'text-red-500' 
        : 'text-blue-500'}>Count: {count}</h2>
    </>

  );
}
