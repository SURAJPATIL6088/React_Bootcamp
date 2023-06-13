import React from "react";
import ReactDOM from "react-dom/client";

// import the components here
// default import
//import HeaderComponent from "./src/components/Header";

// Named import
// it will import all the components from the file
//import * as Obj from "./src/components/Header";
// we can you this like
// Obj.Title

// import header
// bast way to import
import HeaderComponent, {Title} from "./src/components/Header.js";
import BodyComponent from "./src/components/Body.js";
import FooterComponent from "./src/components/Footer.js";
import IMG_CDN_URL from "./src/components/constants.js";


const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
