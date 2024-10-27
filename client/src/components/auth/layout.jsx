import { Outlet } from "react-router-dom";
import accImg from "../../assets/img2.jpg";
function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center  w-1/2 px-12"
        style={{
          backgroundImage: `url(${accImg})`,
          filter: 'blur(1px)', // Adjust blur intensity here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      </div>
      <div className="absolute top-[80%] left-[12%] max-w-md space-y-6 text-center text-primary-foreground">
        <h1 className="text-4xl text-gray-100 font-extrabold tracking-tight">
          Welcome to IIT Dharwad Campus Bazar
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
