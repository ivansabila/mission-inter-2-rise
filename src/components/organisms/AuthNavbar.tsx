import logo from "../../assets/logo.png";
import Image from "../atoms/Image";

const AuthNavbar = () => {
    return (
        <nav className="h-18.5 sm:h-20 px-6 sm:px-30 flex justify-between items-center bg-background-primary border-b border-border">
            <Image className="h-10.5 sm:h-14 w-auto p-2 sm:p-4 object-contain" src={logo} alt="videobelajar logo" />
        </nav>
    );
};

export default AuthNavbar;
