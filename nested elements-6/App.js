const innerParent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an H1 tag From React")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(innerParent);

console.log(innerParent);