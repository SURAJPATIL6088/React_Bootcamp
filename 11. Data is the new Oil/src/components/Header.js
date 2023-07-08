import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Hooks/UserContext";
import useOnline from "../Hooks/useOnline";

export const Title = () => (
  <a href="/">
    <img
      className="h-28"
      alt="food_villa_logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbS295BL3xdJwXWwh7cTytVNtCwa-0r5TI9UviYdDmsnDk15ovoj2HcZlusgDiYkuo4o&usqp=CAU"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // use the useOnline component
  const isOnline = useOnline();

  // get the user now
  const {user} = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-slate-200 shadow-xl">
      <Title />
      <div className="">
        <ul className="flex justify-between items-center py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="contact">Contact</Link>
          </li>

          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>     
      </div>
       
      <span className="p-10 font-semibold text-orange-400">{user.name}</span>
      {/* it show the you are online or offline */}
      <h1>{isOnline ? '✔': '❌'}</h1>
      
      {isLoggedIn ? (
        <button className="align-middle h-10 w-20 mr-10 hover:bg-cyan-700 rounded-xl bg-cyan-500" onClick={() => setIsLoggedIn(false)}>
          <Link to="/signin">Logout</Link>
        </button>
      ) : (
        <button className="items-center h-10 w-20 mr-10 hover:bg-cyan-700 rounded-xl bg-cyan-500" onClick={() => setIsLoggedIn(true)}>
          <Link to="/registration">Login</Link>
        </button>
      )}

    </div>
  );
};

// export the header
export default Header;
