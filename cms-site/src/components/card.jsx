export default function Card() {
  return (
    <div >
      <div className="flex justify-center card w-[400px] h-[600px] shadow-xl">
        <figure className="overflow-hidden">
          {" "}
          {/* image  */}
          <img
            src="https://www.stussy.com/cdn/shop/products/1904879H_BLAC_2_66713794-c8a7-4d63-b93d-f39bb184035e.jpg?v=1683044895&width=480"
            alt="Shoes"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body bg-[#faf9f8] rounded-b-3xl">
          <h2 className="card-title justify-center">Name</h2> {/* Name */}
          <div>
            <a href="#">
              <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] mx-auto block mt-14">
                Detail
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
