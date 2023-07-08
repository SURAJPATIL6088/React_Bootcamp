import { useContext } from "react";
import UserContext from "../Hooks/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h4 className="p-2 m-2 text-center">This site is Developed by {user.name} - {user.email}</h4>
    </div>
  );
};

export default Footer;
