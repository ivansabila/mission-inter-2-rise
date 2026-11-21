import cn from "../../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "default" | "icon";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-inverse-foreground",
    secondary: "bg-primary-100 text-primary",
    outline: "bg-transparent border border-border text-foreground",
    ghost: "bg-transparent border-none text-foreground",
};

const sizes: Record<ButtonSize, string> = {
    default: "h-8.5 sm:h-10.5 px-5.5 sm:px-6.5 py-1.75 sm:py-2.5",
    icon: "size-12",
};

const Button = (props: IButtonProps) => {
    const { children, variant = "primary", size = "default", className = "", ...restProps } = props;
    const baseClasses = "inline-flex justify-center items-center rounded-md font-bold text-body-small cursor-pointer";

    return (
        <button className={cn(baseClasses, variants[variant], sizes[size], className)} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
