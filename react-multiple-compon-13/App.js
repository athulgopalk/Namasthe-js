import React from  "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (

    <h1>Multiple Components</h1> 
  );
}

//component compoition -- one component inside other
const HeadingComponent = () => {
    return (
    <div>
      <Title />
      <h1>This is React Functional Component jbjj</h1>
    </div>
    );
}
   


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);