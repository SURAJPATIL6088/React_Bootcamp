import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(divContainer);