import React from "react";
import ReactDOM from "react-dom/client";

const createElement = React.createElement;

const Chapterheading = createElement(
  "h1",
  {
    id: "title",
    className: "chapter2" // Instead of class, use className
  },
  "Chapter Heading"
);

const heading1 = createElement(
  "h2",
  {
    id: "heading1", // Use unique ids for each element
  },
  "Heading 1 in React"
);

const heading2 = createElement(
  "h2",
  {
    id: "heading2", // Use unique ids for each element
  },
  "Heading 2 in React"
);

const container = createElement(
  "div",
  {
    id: "divContainer",
  },
  [Chapterheading, heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);