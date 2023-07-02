import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // API Call
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {
    const data = await fetch("https://api.github.com/users/surajpatil6088");
    const json = await data?.json();

    console.log(json);
    setUser(json);
  };

  return (
    <div className="min-w-fit mt-5 border bg-cyan-50 drop-shadow-2xl border-black rounded-lg justify-center flex items-center">
      <img
        className="h-48 m-3 rounded-full"
        src={user.avatar_url}
        alt="image"
      ></img>
      <div className="flex flex-col">
        <h3 className=" font-bold">Name : {user?.name}</h3>
        <h3 className="italic">
          Link :{" "}
          <a className="underline italic" href={user?.html_url} target="_blank">
            {" "}
            GO TO THE PROFILE
          </a>{" "}
        </h3>
        <h3 className="">Bio : {user?.bio}</h3>
      </div>
    </div>
  );
};

export default Profile;
