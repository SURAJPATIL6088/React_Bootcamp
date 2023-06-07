import React from "react";
import ReactDOM from "react-dom/client";

/*
const createElement = React.createElement;
const chapterHeading = createElement
(
    "h1",
    {
        id: "chapterTitle",
        className: "chapterHeading",
    },
    "Welcome, to the Chapter 3 of the Series",
);

const heading1 = createElement
(
    "h2",
    {
        id: "heading1",
    },
    "Heading 1 in react",
);

const heading2 = createElement
(
    "h2",
    {
        id: "heading2",
    },
    "Heading 2 in react",
);

const divContainer = createElement
(
    "div",
    {
        id: "divTitle",
    },
    [chapterHeading, heading1, heading2],
);
*/

// using functional component
// normal js variable
const chapterHeading = (
  <h1 id="title" key="chapterheading">
    Welcome, to the Chapter 3 of the Series
  </h1>
);

const heading1 = (
  <h2 id="title" key="heading1">
    Heading 1 in react using Functional Component
  </h2>
);

const heading2 = (
  <h2 id="title" key="heading2">
    Heading 2 in react using Functional Component
  </h2>
);

// functional component
const DivContainer = () => {
  return (
    <div>
      {chapterHeading}
      {heading1}
      {heading2}
      <h2>Namaste React </h2>
      <h2>Hello React </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(divContainer);
