export default function Header() {
  return (
    <div className="navbar bg-[#faf9f7]  font-sans fixed z-[9999]">
      {/* <div className="flex-1"> */}
      <div className="w-[50%]"> 
        <img className="max-w-[18%] object-cover"
          alt="Tailwind CSS Navbar component"
          src="https://1000logos.net/wp-content/uploads/2018/04/Blink-182-Symbol.png"
        />
      </div>
      {/* </div> */}
      <div className="flex-none w-[50%] justify-end">
        <div className="form-control flex flex-row">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto bg-white"
          />
          <button
            type="submit"
            className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-2 w-[70px]"
          >
            Search
          </button>
        </div>
        <a href="#">
          <button className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-2">
            Login
          </button>
        </a>
      </div>
    </div>
  );
}
