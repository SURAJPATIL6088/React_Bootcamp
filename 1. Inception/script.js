const createElement = React.createElement;

const heading1 = createElement(
  "h1",
  {
    id: "title",
  },
  "heading 1 in React"
);

const heading2 = createElement(
  "h2",
  {
    id: "title",
  },
  "heading 2 in React"
);

const container = createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(container);
