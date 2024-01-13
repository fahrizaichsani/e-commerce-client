import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear(), navigate("/");
  };
  return (
    <div className="navbar justify-center bg-[#faf9f7] font-mono shadow-md">
      <div className="w-[50%]">
        <img
          className="max-w-[25%] object-cover"
          alt="Tailwind CSS Navbar component"
          src="https://1000logos.net/wp-content/uploads/2018/04/Blink-182-Symbol.png"
        />
      </div>
      <div className="w-[50%]">
        <button
          onClick={logout}
          className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-[500px] w-[70px] text-[12px]"
        >
          Logout
        </button>
    <Link to={"/add-user"}>
        <button
          className="btn btn-primary bg-[#2e3339] text-[#faf9f7] ml-[25px] text-[12px]"
        >
          Add User
        </button>
    </Link>
      </div>
    </div>
  );
}
