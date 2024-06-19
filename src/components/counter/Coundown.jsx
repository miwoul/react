// import React, { useState } from 'react';
// import './CountdownCs.css';

// const Countdown = () => {
//   const [count, setCount] = useState(0);

//   const increment = (value) => {
//     setCount(prevCount => prevCount + value);
//   };

//   return (
//     <div className="container">
//       <h1 className="header">Counter</h1>
//       <div className="count">count</div>
//       <div className="counter">{count}</div>
//       <button className="button negative" onClick={() => increment(-10)}>-10</button>
//       <button className="button negative" onClick={() => increment(-1)}>-1</button>
//       <button className="button" onClick={() => increment(1)}>+1</button>
//       <button className="button" onClick={() => increment(10)}>+10</button>
//     </div>
//   );
// };

// export default Countdown;

// Countdown.jsx

// import React, { useState } from 'react';
// import './CountdownCs.css';
// import Header from './Header';
// import Counter from './Counter';

// const Countdown = () => {
//   const [count, setCount] = useState(0);

//   const increment = (value) => {
//     setCount(prevCount => prevCount + value);
//   };

//   return (
//     <div className="container">
//       <Header />
//       <Counter count={count} increment={increment} />
//     </div>
//   );
// };

// export default Countdown;

import React, { useState, useEffect } from 'react';
import './CountdownCs.css';
import Header from './Header';
import Counter from './Counter';

const Countdown = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Check if count is even and log message to console
    if (count % 2 === 0) {
      console.log('짝수입니다');
    }
  }, [count]); // Only run this effect when count changes

  const increment = (value) => {
    setCount(prevCount => prevCount + value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetCount = () => {
    // Parse input value to integer and update count
    const newValue = parseInt(inputValue, 10);
    if (!isNaN(newValue)) {
      setCount(newValue);
    }
    // Clear input field after setting count
    setInputValue('');
  };

  return (
    <div className="container">
      <Header />
      <Counter count={count} increment={increment} />
      
      {/* Input field for setting count */}
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={handleSetCount}>Set Count</button>
      </div>
    </div>
  );
};

export default Countdown;
