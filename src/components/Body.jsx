
import './Body.css';
// function Body() {
//     const numA = 1;  
//     const numB = 2;  
//     return (  
//      <div>  
//        <h2>{numA + numB}</h2>  
//      </div>  
//     )  
//   }

// function Body() {
//     const strA = "Hello";
//     const strB = "REACT";
//     return (
//      <div>  
//        <h2>{strA + strB }</h2>
//      </div>
//     )
//   }

// function Body() {
//     const boolA = true;
//     const boolB = false;
//     return (
//      <div>
//        <h2>{boolA || boolB }</h2>
//      </div>
//     )
//   }

// function Body() {
//     const user = {  
//       name : "John",  
//       age : 20  
//     }
//     return (
//     <div>  
//        {/* <h2>{user.name}</h2>  
//        <h2>{user.age}</h2> */}
//        {Object.keys(user).map(key => (
//         <p key={key}>
//             {key} : {user[key]}            
//         </p>

//        ))}
//     </div>  
//     )  
//   }

// function Body() {
//     const num = 20
//     return (
//      <div>  
//        <h2>{num} 은 { num % 2 === 0 ? "짝수" : "홀수" } 입니다.</h2>
//      </div>
//     )
//   }

// function Body() {
    // const num = 19  
    // if ( num % 2 === 0 ) {  
    //    return <div>{num} : 짝수입니다</div>  
    // } else {  
    //    return <div>{num} : 홀수입니다</div>     
    // }  
//   }


function Body() {
  return (
   <div className='body'>
     <h1>BODY</h1>
   </div>
  )
}

  export default Body;