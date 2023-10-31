import { useEffect } from "react";
import { logoutUser } from "../../services/pocketbase/user"; logoutUser

export default function Logout() {

  useEffect(() => {
    logoutUser();
    window.location.href = "/";
  }, []);

  return <>
  </>
};
