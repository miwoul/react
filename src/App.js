import logo from './logo.svg';
import './App.css';
// import Component from './components/Component';
// import Body from './components/Body';
// import User from './components/User';
// import Student from './components/Student';
import BookList from './components/BookList';
import Button from './components/Button';
import Counter from './components/Counter';
import MyComponent from './components/MyComponent';
import LikeDisLike from './components/LikeDisLike';
import InputWithFocusButton from './components/InputWithFocusButton';
import Countdown from './components/counter/Coundown';
import { useState ,useEffect } from 'react';


// const users = [
//   {name: 'John', age: 25, mbti: 'ENTP'},
//   {name: 'Ru', age: 26, mbti: 'ISFJ'}
// ]
// const students = [
//   {name: 'John Doe', age: 20, major: 'Computer Science'},
//   {name: 'Jane Smith', age: 22, major: 'Mathematics'},
//   {name: 'Alice Johnson', age: 19, major: 'Physics'},
//   {name: 'Bob Brown', age: 21, major: 'Chemistry'}
// ]
function App() {
  return (
    // <div className="App"> 
    //     <Component/> 
    //     <Component/> 
    //     <Component/> 
    // </div>
    // <div className='App'>
    //   <body>
    //     <Component />
    //     <Body />
    //     <div></div>
    //   </body>
    // </div>
    // <div className='App'>
    //   <User name="acb" age="20" />
    //   <User {...users[0]} />    
    //   <User {...users[1]} />    
    // </div>
    
    // <div className='App'>
    //   <Student {...students[0]}/>
    //   <Student {...students[1]}/>
    //   <Student {...students[2]}/>
    //   <Student {...students[3]}/>
    // </div>

    // <div>
    //   <BookList />
    // </div>
    // <div className='App'>
    //   <Button />
    // </div>
    // <div className='App'>
    //   <Counter />
    // </div>
    // <div className='App'>
    //   <MyComponent />
    // </div>
    // <div className='App'>
    //   <LikeDisLike />
    // </div>
    // <div className='App'>
    //   <InputWithFocusButton />
    // </div>
    <div className='App'>
      <Countdown />
    </div>

  
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}


export default App;
