import React from "react";
import FormLogin from "../components/form-login";

function Login() {
  return (
    <div className="h-screen w-screen flex place-content-center item-center bg-[#faf9f8]">
      <div className="bg-[#2e3339] w-[500px] h-[600px] mt-28 relative rounded-lg">
        <FormLogin/>
      </div>
    </div>
  );
}

export default Login;
 