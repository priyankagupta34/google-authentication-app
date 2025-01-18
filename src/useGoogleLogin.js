import { GoogleLogin } from "@react-oauth/google";

<GoogleLogin
  onSuccess={(response) => console.log("Manual Login Success:", response)}
  onError={() => console.error("Manual Login Failed")}
/>;
