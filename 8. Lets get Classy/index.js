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
import Header, { Title } from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Footer from "./src/components/Footer.js";
// import IMG_CDN_URL from "./src/components/constants.js";

// import the routing packages
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import the navigation drawer
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/Contact.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import Profile from "./src/components/Profile.js";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/* /* {Outlet} */}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

// create the app router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // parentPath/{path} ==> https://localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
