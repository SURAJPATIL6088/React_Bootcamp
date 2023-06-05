const createElement = React.createElement;
const Chapterheading = createElement("h1", {
    id: "title",
    className: "chapter2"
}, "Hi, This is Second Chapter of the React");
const heading1 = createElement("h2", {
    id: "heading1"
}, "heading 1 in react");
const heading2 = createElement("h2", {
    id: "heading2"
}, "heading 2 in react");
const container = createElement("div", {
    id: "divContainer"
}, [
    Chapterheading,
    heading1,
    heading2
]);
ReactDOM.render(container, document.getElementById("root"));

//# sourceMappingURL=index.6bd02f5a.js.map
