import Input, { type IInputProps } from "../atoms/Input";
import Label from "../atoms/Label";

export interface IFormFieldProps extends IInputProps {
    label: string;
    id: string;
}

const FormField = (props: IFormFieldProps) => {
    const { label, id, type = "text", required = false, ...restProps } = props;

    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <Input id={id} name={id} type={type} required={required} {...restProps} />
        </div>
    );
};

export default FormField;
