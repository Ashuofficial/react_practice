import { Outlet } from "react-router-dom";

function MainHeader() {
  return (
    <header className="main-header">
        <Outlet />
        {/* This Outlet will render the child routes of the current route */}
        {/* You can use this to render nested routes */}
        {/* outlet-please allow all the child routes of thsi to render */}
        {/* <h1>Router App</h1> */}
      
      </header>
    );
}
export default MainHeader;