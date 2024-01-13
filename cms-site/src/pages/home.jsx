import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import priceFormat from "../helper/priceFormat";
import { Link } from "react-router-dom";
import ButtonJoin from "../components/button-join";
import Pagination from "../../../public-site/src/components/pagination";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);


  const fetchProducts = async (value) => {
    try {
      // let query = { page: 1 };
      // if (value.page) {
      //   query = value;
      // }
      
      // if (value.sorting) {
      //   query = value
      // }

      const { data } = await axios({
        url: "http://api.casablancass.online/products",
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        // params: query,
      });
      
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const { data } = await axios({
        url: `http://api.casablancass.online/products/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);
  
  // useEffect(() => {
  //   fetchProducts({ page });
  // }, [page]);

  return (
    <>
      <div className="font-mono">
        <Link to={"/products/add"}>
          <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] w-[70px] text-[12px] ml-[150px] mt-[80px]">
            Add
          </button>
        </Link>
        <Link to={"/products/categories"}>
          <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] w-[70px] text-[12px] ml-[5px] mt-[80px]">
            Category
          </button>
        </Link>
      </div>
      {/* <div>
        <ButtonJoin fetchProducts={fetchProducts}/>
      </div> */}
      <div className="bg-[#faf9f7] font-mono ml-[100px] mr-[100px] mt-[50px] mb-[140px]">
        <div className="overflow-x-auto rounded-xl border-2 shadow-xl">
          <table className="table bg-[#faf9f7]">
            <thead>
              <tr>
                <th className="text-[#222222]">Image</th>
                <th className="text-[#222222]">User ID</th>
                <th className="text-[#222222]">Name</th>
                <th className="text-[#222222]">Description</th>
                <th className="text-[#222222]">Price</th>
                <th className="text-[#222222]">Stock</th>
                <th className="text-[#222222]">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.imgUrl}
                      alt="image"
                      className="object-cover w-[100px] h-[100px]"
                    />
                  </td>
                  <td>{item.authorId}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{priceFormat(item.price)}</td>
                  <td>{item.stock}</td>
                  <td>
                    <Link to={`/products/edit/${item.id}`}>
                      <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-2 w-[70px] text-[12px]">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-2 w-[70px] text-[12px]"
                    >
                      Delete
                    </button>
                    <Link to={`/products/${item.id}`}>
                      <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-2 w-[70px] text-[12px]">
                        Detail
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div>
        <Pagination setPage={setPage} page={page}/>
      </div> */}
    </>
  );
}

export default Home;
