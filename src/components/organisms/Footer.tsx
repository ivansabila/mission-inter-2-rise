import { FOOTER_NAVIGATION, SOCIAL_LINKS } from "../../constants/options";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import logo from "../../assets/logo.png";
import Heading from "../atoms/Heading";
import { ChevronDown, ChevronRight } from "lucide-react";
import Anchor from "../atoms/Anchor";
import { useState } from "react";
import cn from "../../utils/cn";

const Footer = () => {
    const [openIndex, setOpenIndex] = useState<number[]>([]);

    const toggleOpen = (index: number) => {
        setOpenIndex((prev) => (prev.includes(index) ? prev.filter((idx) => idx !== index) : [index, ...prev]));
    };

    return (
        <footer className="p-5 sm:py-15 flex justify-center bg-background-primary border-t border-border">
            <div className="w-full max-w-300 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div className="flex flex-col items-start gap-4">
                        <Image className="h-9 sm:h-14 w-auto p-2 sm:p-3 pl-0 sm:pl-0 object-contain" src={logo} alt="videobelajar logo" />
                        <div className="flex flex-col gap-2">
                            <Text className="sm:text-body-large" variant="primary" weight="bold">
                                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                            </Text>
                            <Text variant="primary">Jl. Usman Effendi No. 50 Lowokwaru, Malang</Text>
                            <Text variant="primary">+62-877-7123-1234</Text>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-12">
                        {FOOTER_NAVIGATION.map((nav, index) => {
                            const isOpen = openIndex.includes(index);
                            return (
                                <nav className="flex flex-col gap-3" key={index}>
                                    <button className="flex justify-between items-center" onClick={() => toggleOpen(index)}>
                                        <Heading className="text-body-medium" level={3}>
                                            {nav.title}
                                        </Heading>
                                        {isOpen ? <ChevronDown className="sm:hidden text-muted" size={20} /> : <ChevronRight className="sm:hidden text-muted" size={20} />}
                                    </button>
                                    <ul className={cn("flex-col gap-3 sm:flex", isOpen ? "flex" : "hidden")}>
                                        {nav.links.map((link, index) => (
                                            <li key={index}>
                                                <Anchor className="text-body-medium" to={link.path}>
                                                    {link.label}
                                                </Anchor>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            );
                        })}
                    </div>
                </div>
                <hr className="flex-1 border border-border" />
                <div className="flex flex-col sm:flex-row-reverse sm:justify-between sm:items-center gap-3">
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <Anchor to={link.path} key={link.name}>
                                <Image className="size-9 p-1.5 object-cover rounded-full border border-border" src={link.icon} alt={link.name} />
                            </Anchor>
                        ))}
                    </div>
                    <Text className="text-body-medium" weight="medium">
                        @2023 Gerobak Sayur All Rights Reserved.
                    </Text>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
