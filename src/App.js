import React, { useState } from "react";
import { useGoogleOneTapLogin } from "@react-oauth/google";

const App = () => {
  const [user, setUser] = useState();
  const handleLoginSuccess = async (response) => {
    const idtoken = response.credential;
    await getAccessToken(idtoken);
  };

  const getAccessToken = async (idToken) => {
    try {
      const response = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`
      );
      const data = await response.json();
      if (data.error) {
        console.error("Error fetching Access Token:", data.error);
        return null;
      }
      setUser(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const handleLoginFailure = () => {
    console.error("Login Failed");
  };

  useGoogleOneTapLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFailure,
  });

  const handleLogout = () => {
    // Revoke the user session
    window.google.accounts.id.revoke(user.email, () => {
      console.log("User logged out");
      setUser(null);
      // Trigger One Tap again after logout
      window.google.accounts.id.prompt(); // This will show the One Tap login screen again
    });
  };

  return (
    <div>
      {!user ? (
        <h1>Login with Google</h1>
      ) : (
        <nav className="menu">
          <div className="flex">
            <img src={user.picture} alt="profile" />
            <div>{user.given_name}</div>
          </div>

          <div>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default App;
