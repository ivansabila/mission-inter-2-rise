import logo from "../../assets/logo.png";
import Image from "../atoms/Image";
import NavbarDropdown from "../molecules/NavbarDropdown";

const MainNavbar = () => {
    return (
        <nav className="h-18.5 px-5 flex justify-center bg-background-primary border-b border-border">
            <div className="w-full max-w-300 flex justify-between items-center">
                <Image className="h-10.5 sm:h-14 w-auto p-2 sm:p-4 object-contain" src={logo} alt="videobelajar logo" />
                <NavbarDropdown />
            </div>
        </nav>
    );
};

export default MainNavbar;
