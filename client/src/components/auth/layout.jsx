import { Outlet } from "react-router-dom";
import login_page_img from '../../assets/Login_Page.jpg'

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-primary w-1/2 ">
        <img  src={login_page_img} alt="Login Page" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
       