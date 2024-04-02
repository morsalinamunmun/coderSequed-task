import { useState } from "react";
import UserDashboard from "./UserDashboard/UserDashboard";

const Dashboard = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const closeSideMenu = () => {
        setIsSideMenuOpen(false);
      };
      const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
      };
    return (
        <div>
            <UserDashboard isSideMenuOpen={isSideMenuOpen} closeSideMenu={closeSideMenu} toggleSideMenu={toggleSideMenu}/>
        </div>
    );
};

export default Dashboard;