import Label from "../atoms/Label";
import Select, { type ISelectProps } from "./Select";

export interface ISelectFieldProps extends ISelectProps {
    label: string;
    id: string;
    required?: boolean;
}

const SelectField = (props: ISelectFieldProps) => {
    const { label, id, required, ...restProps } = props;

    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <Select id={id} {...restProps} />
        </div>
    );
};

export default SelectField;
