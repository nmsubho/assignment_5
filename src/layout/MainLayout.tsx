import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
