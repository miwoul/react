// Counter.jsx

import React from 'react';

const Counter = ({ count, increment }) => {
  return (
    <div>
      <div className="count">count</div>
      <div className="counter">{count}</div>
      <button className="button negative" onClick={() => increment(-10)}>-10</button>
      <button className="button negative" onClick={() => increment(-1)}>-1</button>
      <button className="button" onClick={() => increment(1)}>+1</button>
      <button className="button" onClick={() => increment(10)}>+10</button>
    </div>
  );
};

export default Counter;
