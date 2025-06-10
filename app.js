import React from "react";
import { createRoot } from "react-dom/client"; 


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "tag", key: "h1" }, "I am an h tag"),
    React.createElement("h2", { key: "h2" }, "I am an h2 tag"),
  ])
);


const rootElement = document.getElementById("root"); // ✅ must match the div in HTML
const root = createRoot(rootElement); // ✅ works only in React 18+
root.render(parent);
