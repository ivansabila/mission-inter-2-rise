import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import cn from "../../utils/cn";
import Image from "../atoms/Image";

export interface ISelectOption {
    label: string;
    value: string;
    icon?: string;
}

export interface ISelectProps {
    options: ISelectOption[];
    id: string;
    value: string;
    onChange: (value: string) => void;
}

const Select = (props: ISelectProps) => {
    const { options, id, value, onChange } = props;

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((option) => option.value === value);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const handleSelect = (value: string) => {
        onChange(value);
        setIsOpen(false);
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
            <button
                className="w-full h-12 flex justify-between items-center border border-border rounded-md text-body-small sm:text-body-medium text-foreground bg-background-primary overflow-hidden"
                type="button"
                id={id}
                name={id}
                onClick={toggleOpen}
            >
                {selectedOption?.icon && (
                    <div className="h-full px-2.5 flex justify-center items-center border-r border-border bg-grayscale-200">
                        <Image className="h-5 w-6 object-contain shrink-0" src={selectedOption?.icon} alt={selectedOption.value} />
                    </div>
                )}
                <div className="w-full pl-2.5 pr-3.5 py-1 flex justify-between items-center">
                    {selectedOption?.label}
                    {isOpen ? <ChevronUp className="text-muted" size={20} /> : <ChevronDown className="text-muted" size={20} />}
                </div>
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 p-1 border border-border rounded-md bg-background-primary">
                    {options.map((option) => (
                        <li
                            className={cn("p-1.5 flex items-center gap-4 rounded-sm text-body-small sm:text-body-medium cursor-pointer hover:bg-grayscale-100", option.value === value && "bg-grayscale-200")}
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.icon && <Image className="h-5 w-6 object-contain shrink-0" src={option.icon} alt={option.value} />}
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
