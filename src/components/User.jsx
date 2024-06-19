import PropTypes from 'prop-types'; 

User.propTypes = {   
  name: PropTypes.string, 
  age: PropTypes.number.isRequired,
  mbti: PropTypes.string.isRequired 
};

// function User (props) {  
//     return (  
//         <h1>  
//            {props.name}  : {props.age}
//          </h1>  
//     );  
//   }

function User ({name, age, mbti}) {  
    return (  
        <h1>  
           {name}  : {age} : {mbti}
         </h1>  
    );  
  }

  export default User;