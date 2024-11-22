import React from  "react";
import ReactDOM from "react-dom/client";
// this is react elements not component
// const heading = React.createElement("h1",{},"This is hello world from react");

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);   core react way

const HeadingComponent = () => {
    return <h1>This is React Functional Component</h1>
}

const HeadingComponentCoolway = () => <h1>This is React Function compoent using shorthand method or cool way</h1> //this is also valid,you can skip return also
const HeadingComponentCoolway2 = () => (
  <h1>This is React Function compoent using shorthand method or cool way which has multiple line wrapped in parenthisis</h1>
); //this is also valid 


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(HeadingComponent);   ====> this wont work , this only works for react elements.

root.render(<HeadingComponent/>);