import { Outlet } from "react-router-dom";

function MainHeader() {
  return (
    <header className="main-header">
        <Outlet />
        {/* outlet-please allow all the child routes of thsi to render */}
        {/* <h1>Router App</h1> */}
      
      </header>
    );
}
export default MainHeader;