import React from "react";
import { useGoogleOneTapLogin } from "@react-oauth/google";

const App = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);
  };

  const handleLoginFailure = () => {
    console.error("Login Failed");
  };

  useGoogleOneTapLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFailure,
  });

  return (
    <div>
      <h1>Login with Google</h1>
    </div>
  );
};

export default App;
