import { useState } from "react"

function Counter() {

        //첫번째요소: 상태현재 값
        //두번째요소: 상태업뎃함수

        const [count, setCount] = useState(0);

        // function handleCounyUP(){
        //     setCount(coun + 1);
        //     // document.querySelector('span').textContent = Number
        // }
     
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me !
            </button> 
        </div>        
    )
}

export default Counter;