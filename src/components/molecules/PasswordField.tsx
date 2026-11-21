import { Eye, EyeOff } from "lucide-react";
import Input, { type IInputProps } from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import { useState } from "react";

export interface IPasswordFieldProps extends IInputProps {
    label: string;
    id: string;
}

const PasswordField = (props: IPasswordFieldProps) => {
    const { label, id, required = false, ...restProps } = props;

    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <div className="relative flex items-center">
                <Input className="pr-12" id={id} name={id} type={isShowPassword ? "text" : "password"} required={required} {...restProps} />
                <Button className="absolute right-0 text-muted" variant="ghost" size="icon" type="button" onClick={togglePasswordVisibility}>
                    {isShowPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </Button>
            </div>
        </div>
    );
};

export default PasswordField;
