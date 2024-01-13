import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import priceFormat from "../helper/priceFormat";
import { Link } from "react-router-dom";

function Category() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchProducts = async (value) => {
    try {
      const { data } = await axios({
        url: "http://api.casablancass.online/categories",
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-[#faf9f7] font-mono ml-[100px] mr-[100px] mt-[150px] mb-[200px]">
        <div className="overflow-x-auto rounded-xl border-2 shadow-xl">
          <table className="table bg-[#faf9f7]">
            <thead>
              <tr>
                <th className="text-[#222222]">Name</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Category;
