import React, { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const App = () => {
  // const clientId = "YOUR_GOOGLE_CLIENT_ID";

  // Initialize One Tap Login
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

  return (
    <div>
      <h1>Google One Tap Login</h1>
      <p>You should see a One Tap Login prompt.</p>
    </div>
  );
};

export default App;
