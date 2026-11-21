import cn from "../../utils/cn";

export type HeadingVariant = "default" | "inverse";
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingGrade = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingGradeResponsive = {
    base: HeadingGrade;
    sm: HeadingGrade;
};

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    variant?: HeadingVariant;
    level?: HeadingGrade;
    size?: HeadingGrade | HeadingGradeResponsive;
    className?: string;
}

const variants: Record<HeadingVariant, string> = {
    default: "text-foreground",
    inverse: "text-inverse-foreground",
};

const baseSizes: Record<HeadingGrade, string> = {
    1: "text-heading-1 font-bold",
    2: "text-heading-2 font-semibold",
    3: "text-heading-3 font-semibold",
    4: "text-heading-4 font-semibold",
    5: "text-heading-5 font-semibold",
    6: "text-heading-6 font-semibold",
};

const smSizes: Record<HeadingGrade, string> = {
    1: "sm:text-heading-1 sm:font-bold",
    2: "sm:text-heading-2 sm:font-semibold",
    3: "sm:text-heading-3 sm:font-semibold",
    4: "sm:text-heading-4 sm:font-semibold",
    5: "sm:text-heading-5 sm:font-semibold",
    6: "sm:text-heading-6 sm:font-semibold",
};

const getHeadingSizeClasses = (level: HeadingGrade, size?: HeadingGrade | HeadingGradeResponsive): string => {
    if (!size) return baseSizes[level];
    if (typeof size === "number") return baseSizes[size];

    return cn(baseSizes[size.base], smSizes[size.sm]);
};

const Heading = (props: IHeadingProps) => {
    const { children, variant = "default", level = 2, size, className = "", ...restProps } = props;
    const baseClasses = "font-heading";
    const Component: HeadingTag = `h${level}`;

    return (
        <Component className={cn(baseClasses, variants[variant], getHeadingSizeClasses(level, size), className)} {...restProps}>
            {children}
        </Component>
    );
};

export default Heading;
