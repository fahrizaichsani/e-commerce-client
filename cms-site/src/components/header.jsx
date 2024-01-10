export default function Header() {
  return (
    <div className="navbar bg-[#faf9f7] font-sans">
      <div className="flex-1">
        <img
          style={{ maxWidth: "18%", marginLeft: "57%" }}
          alt="Tailwind CSS Navbar component"
          src="https://1000logos.net/wp-content/uploads/2018/04/Blink-182-Symbol.png"
        />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control flex "> {/* search */}
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto bg-white border-2 mb-[5px]"
          />
          <button
            type="submit"
            className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-2 w-[187px]"
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
