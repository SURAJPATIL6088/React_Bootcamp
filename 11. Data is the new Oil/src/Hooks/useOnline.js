import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setInOnline] = useState(true);

  useEffect(() => {
    // handle the online event
    const handleOnline = () => {
      setInOnline(true);
    };

    // handle the offline event
    const handleOffline = () => {
      setInOnline(false);
    };
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    // clear the mess that we have created
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
