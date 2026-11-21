import type { ICourse } from "../../constants/courses";
import CourseCard from "../molecules/CourseCard";

export interface ICourseListProps {
    courses: ICourse[];
    onEdit?: (course: ICourse) => void;
    onDelete?: (course: ICourse) => void;
    onDetail?: (course: ICourse) => void;
}

const CourseList = (props: ICourseListProps) => {
    const { courses, onEdit, onDelete, onDetail } = props;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-x-6 sm:gap-y-8">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} onEdit={onEdit} onDelete={onDelete} onDetail={onDetail} />
            ))}
        </div>
    );
};

export default CourseList;
