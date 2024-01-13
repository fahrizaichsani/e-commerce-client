import React from 'react'
import EditForm from '../components/edit-form'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function EditPage() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});

  const fetchDetailProduct = async () => {
    try {
      const { data } = await axios({
        url: `http://api.casablancass.online/products/${id}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setDetailProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        url: `http://api.casablancass.online/products/${id}`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        data: input
      });

      navigate("/products")
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchDetailProduct()
  }, [])
  return (
    <>
    <EditForm detailProduct={detailProduct} changeInput={changeInput} submitForm={submitForm}/>
    </>
  )
}

export default EditPage