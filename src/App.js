import React, { useEffect } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const App = () => {
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      const token = credentialResponse.credential;
      console.log("Token:", token);
    },
    onError: () => {
      console.error("Login Failed");
    },
    auto_select: true, // Automatically log in with the most recently authenticated user
    cancel_on_tap_outside: false, // Keeps the prompt open even if the user clicks outside
    context: "signin", // Can be 'signin' or 'signup'
  });

  useEffect(() => {
    // Show the One Tap Login prompt
    login();
  }, [login]);
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);
  };

  const handleLoginFailure = () => {
    console.error("Login Failed");
  };

  return (
    <div>
      <h1>Login with Google</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        size="large"
        useOneTap
        width={200}
      />
    </div>
  );
};

export default App;
