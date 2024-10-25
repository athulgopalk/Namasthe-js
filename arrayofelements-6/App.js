const innerParent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag From React"),//2 children is there now,using array
    React.createElement("h2", {}, "I am an H2 tag From React"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(innerParent);

console.log(innerParent);

//what if there many many siblings and div ,then check the 7th file