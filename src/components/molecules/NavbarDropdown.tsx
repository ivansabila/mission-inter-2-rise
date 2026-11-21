import { Menu } from "lucide-react";
import Button from "../atoms/Button";
import { useEffect, useRef, useState } from "react";
import Anchor from "../atoms/Anchor";
import { NAVBAR_DROPDOWN_MENU } from "../../constants/options";
import cn from "../../utils/cn";
import profile from "../../assets/profile.png";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

const NavbarDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (event.target instanceof Node && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <Button className="sm:hidden text-muted" variant="ghost" size="icon" type="button" onClick={toggleOpen}>
                <Menu size={20} />
            </Button>
            <div className="hidden sm:flex sm:items-center gap-9">
                <Text weight="medium">Kategori</Text>
                <Image className="size-11 object-cover rounded-lg cursor-pointer" src={profile} alt="videobelajar logo" onClick={toggleOpen} />
            </div>

            {isOpen && (
                <ul className="fixed sm:absolute z-20 top-18.5 sm:top-auto sm:right-0 sm:w-50 sm:mt-1 inset-x-0 sm:inset-auto sm:rounded-md sm:border sm:border-border bg-background-primary overflow-hidden">
                    {NAVBAR_DROPDOWN_MENU.map((menu, index) => {
                        const MenuIcon = menu.icon;
                        return (
                            <li key={index}>
                                <Anchor className={cn("w-full px-5 sm:px-3 py-4 flex items-center gap-2 text-body-medium border-b border-border hover:bg-grayscale-100", menu.isDanger && "text-error")} to={menu.path}>
                                    {menu.label}
                                    {MenuIcon && <MenuIcon size={20} />}
                                </Anchor>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default NavbarDropdown;
