import { COURSE_CATEGORY_OPTIONS } from "../../constants/options";
import cn from "../../utils/cn";

export interface ICourseCategoryProps {
    value: string;
    onChange: (value: string) => void;
}

const CourseCategory = (props: ICourseCategoryProps) => {
    const { value, onChange } = props;

    const handleSelect = (value: string) => {
        onChange(value);
    };

    return (
        <ul className="flex overflow-x-auto">
            {COURSE_CATEGORY_OPTIONS.map((option) => (
                <li className="flex flex-col shrink-0" key={option.value}>
                    <button className={cn("w-fit py-3 pr-9 text-body-small sm:text-body-medium font-medium cursor-pointer", option.value === value ? "text-tertiary" : "text-muted")} type="button" onClick={() => handleSelect(option.value)}>
                        {option.label}
                    </button>
                    <div className={cn("max-w-13 h-1.5 bg-tertiary rounded-full", option.value === value ? "block" : "hidden")} />
                </li>
            ))}
        </ul>
    );
};

export default CourseCategory;
