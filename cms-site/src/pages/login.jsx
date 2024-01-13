import React from "react";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import HeaderLogin from "../components/header-login";

function LoginPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeInput = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        url: "http://api.casablancass.online/login",
        method: "POST",
        data: input,
      });

      localStorage.setItem("access_token", data.accessToken);

      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="bg-[#faf9f7]">
      <HeaderLogin />
      <div className="font-mono">
        <img src="" alt="" />
        <div
          className="
        flex justify-center items-center
        bg-[#faf9f7]"
        >
          <div
            className="container flex justify-center items-center"
            style={{ height: "100vh" }}
          >
            <form
              onSubmit={submitForm}
              className="flex flex-col justify-center items-center h-[280px] w-[400px] border rounded-xl shadow-xl"
            >
              <div className="input-group mb-2 mt-[25px]">
                <label className="form-label text-[#222222]">Email:</label>
                <input
                  type="text"
                  className="form-control h-[30px] rounded shadow-xl bg-[#ffffff]"
                  onChange={changeInput}
                  name="email"
                />
              </div>
              <div className="input-group mb-6">
                <label className="form-label text-[#222222]">Password:</label>
                <input
                  type="password"
                  className="form-control h-[30px] rounded shadow-xl bg-[#ffffff]"
                  onChange={changeInput}
                  name="password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary bg-[#2e3339] text-[#faf9f7] md-2 shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default LoginPage;
