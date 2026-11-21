import cn from "../../utils/cn";

export type InputType = "text" | "password" | "email";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: InputType;
}

const Input = (props: IInputProps) => {
    const { className = "", type = "text", ...restProps } = props;
    const baseClasses = "w-full h-12 px-2.5 py-1 border border-border rounded-md text-body-small sm:text-body-medium text-foreground bg-background-primary";

    return <input className={cn(baseClasses, className)} type={type} {...restProps} />;
};

export default Input;
