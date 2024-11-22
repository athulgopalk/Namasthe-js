import React from  "react";
import ReactDOM from "react-dom/client";

const number = 1000;

const Title = () => (
  
    <h1>I am a component , and also i am a normal function, so i can be called inside {} brazes</h1>
  
);
const HeadingComponent = () => 
     (
      <div>
      {Title()}
        <h2> {100 + 200} + {number} = {300 + number}</h2>
        <h4>{console.log("testing the js inside jsx")}</h4>   
      {/* by adding curly braces you can add javascript inside jsx  */}
        <h1>This is React Functional Component  </h1>
        <span>{number}</span>
      </div>
    );



   


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);