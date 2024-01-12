import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <>
    <div className="bg-[#faf9f7]">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </>
    )
}
