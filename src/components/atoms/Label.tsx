import cn from "../../utils/cn";

export interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    className?: string;
    required?: boolean;
}

const Label = (props: ILabelProps) => {
    const { children, className = "", required = false, ...restProps } = props;
    const baseClasses = "text-body-small sm:text-body-medium text-muted";

    return (
        <label className={cn(baseClasses, className)} {...restProps}>
            {children}
            {required && <span className={cn("ml-1 text-error")}>*</span>}
        </label>
    );
};

export default Label;
