import { Outlet } from "react-router";
import AuthNavbar from "../components/organisms/AuthNavbar";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <AuthNavbar />
            <main className="flex justify-center flex-1 bg-background-base">
                <div className="w-full mx-5 my-7 flex flex-col items-center sm:justify-center">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;
