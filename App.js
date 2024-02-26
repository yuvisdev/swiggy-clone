let root = ReactDOM.createRoot(document.getElementById("root"));
let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "heading"),
    React.createElement("h2", { id: "subheading" }, "subheading"),
  ])
);

root.render(parent);
