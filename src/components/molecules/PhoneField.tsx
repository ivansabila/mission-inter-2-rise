import Input, { type IInputProps } from "../atoms/Input";
import Label from "../atoms/Label";
import Select, { type ISelectOption } from "./Select";

export interface IPhoneFieldProps extends IInputProps {
    label: string;
    id: string;
    required?: boolean;
    options: ISelectOption[];
    selectValue: string;
    selectOnChange: (value: string) => void;
}

const PhoneField = (props: IPhoneFieldProps) => {
    const { label, id, required, options, selectValue, selectOnChange, ...restProps } = props;

    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <div className="flex gap-3">
                <Select id={id} options={options} value={selectValue} onChange={selectOnChange} />
                <Input id={id} name={id} required={required} {...restProps} />
            </div>
        </div>
    );
};

export default PhoneField;
