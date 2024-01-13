import React from "react";
import axios from "axios";
import AddForm from "../components/add-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imgUrl: "",
    categoryId: "",
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
        url: "http://api.casablancass.online/products",
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        data: input
      });

      navigate("/products")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <Header/> */}
      <AddForm changeInput={changeInput} submitForm={submitForm}/>
      {/* <Footer/> */}
    </>
  );
}

export default AddPage;
