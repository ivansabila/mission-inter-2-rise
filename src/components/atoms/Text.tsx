import cn from "../../utils/cn";

export type TextVariant = "primary" | "secondary" | "disabled" | "inverse-primary" | "inverse-secondary" | "inverse-disabled";
export type TextSize = "xs" | "sm" | "md" | "lg";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    size?: TextSize;
    variant?: TextVariant;
    weight?: TextWeight;
    className?: string;
}

const variants: Record<TextVariant, string> = {
    primary: "text-foreground",
    secondary: "text-muted",
    disabled: "text-disabled",
    "inverse-primary": "text-inverse-foreground",
    "inverse-secondary": "text-inverse-muted",
    "inverse-disabled": "text-inverse-disabled",
};

const sizes: Record<TextSize, string> = {
    xs: "text-body-xsmall sm:text-body-small",
    sm: "text-body-small sm:text-body-medium",
    md: "text-body-medium sm:text-body-large",
    lg: "text-body-large",
};

const weights: Record<TextWeight, string> = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
};

const Text = (props: ITextProps) => {
    const { children, size = "sm", variant = "secondary", weight = "regular", className = "", ...restProps } = props;

    return (
        <p className={cn(sizes[size], variants[variant], weights[weight], className)} {...restProps}>
            {children}
        </p>
    );
};

export default Text;
