import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";
import Navigation from "../../ui/Navigation";

function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="grid grid-cols-[250px_1fr] flex-1">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
