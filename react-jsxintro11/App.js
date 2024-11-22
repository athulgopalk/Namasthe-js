import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id: "heading"},"This is react h1 using core react");
//this is react using core react;

console.log(heading);

const jsxDemo = <h1 id="heading1">H1 tag from jsx</h1> 
//this is how we write jsx , jsx is not html,its is html-like syntax
console.log(jsxDemo);

{
    {
        {
            {
                {
                    {
                        {
                            
                        }
                    }
                }
            }
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxDemo);

