import { useState } from "react";

// const loggedInUser = () => {
//   // API call to check authentication
//   return true;
// };

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="food_villa_logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbS295BL3xdJwXWwh7cTytVNtCwa-0r5TI9UviYdDmsnDk15ovoj2HcZlusgDiYkuo4o&usqp=CAU"
    />
  </a>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

// export the header
export default HeaderComponent;
