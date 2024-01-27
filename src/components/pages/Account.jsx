import React, { useEffect, useState,  } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("TOKEN");


export default function Account() {

  const [message, setMessage] = useState("");

  useEffect(() => {
     // set configurations for the API call here
     const configuration = {
      method: "get",
      url: "http://localhost:3333/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });

  }, [])

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }

  return (
    <div>
      <h1 className="text-center text-red-500">{message}</h1>
      <button type="submit" className="button-logout" onClick={() => logout()}>
   Logout
</button>
    </div>
  );
}