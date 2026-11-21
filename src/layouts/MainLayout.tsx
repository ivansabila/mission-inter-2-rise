import { Outlet } from "react-router";
import MainNavbar from "../components/organisms/MainNavbar";
import Footer from "../components/organisms/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="px-5 py-7 flex justify-center flex-1 bg-background-base">
                <div className="w-full max-w-300 flex flex-col items-center sm:justify-center">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
