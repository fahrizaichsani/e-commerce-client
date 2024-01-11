// import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <div>
      <div className="flex justify-center card w-[400px] h-[600px] shadow-xl font-mono">
        <figure className="overflow-hidden">
          {" "}
          {/* image  */}
          <img
            src="https://www.stussy.com/cdn/shop/products/1904879H_BLAC_2_66713794-c8a7-4d63-b93d-f39bb184035e.jpg?v=1683044895&width=480"
            alt="Shoes"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body bg-[#faf9f8] rounded-b-md">
          <h6 className="card-title justify-center text-[16px]">{item.name}</h6>{" "}
          {/* Name */}
          <div>
            {/* <Link to={`/publics/pub/${item.id}`}> */}
              <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] mx-auto block mt-14 text-[12px]">
                Detail
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
