import React, { useRef } from 'react';



function InputWithFocusButton() {
  const inputRef = useRef(null);

  const handleClick = (e) => {
    // `current` 속성을 통해 DOM 노드에 접근   
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>

  );

}



export default InputWithFocusButton;