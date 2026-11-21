import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { Star } from "lucide-react";
import formatPrice from "../../utils/formatPrice";
import Button from "../atoms/Button";
import cn from "../../utils/cn";
import type { ICourse } from "../../constants/courses";

export interface ICourseCardProps {
    course: ICourse;
    onEdit?: (course: ICourse) => void;
    onDelete?: (course: ICourse) => void;
    onDetail?: (course: ICourse) => void;
}

const CourseCard = (props: ICourseCardProps) => {
    const { course, onEdit, onDelete, onDetail } = props;

    return (
        <article className="bg-background-primary border border-border rounded-lg">
            <div className={cn("p-4 sm:p-5 flex flex-col gap-2 sm:gap-4", onDetail && "cursor-pointer")} onClick={() => onDetail?.(course)}>
                <div className="flex sm:flex-col gap-3 sm:gap-4">
                    <Image className="h-20.5 sm:h-auto sm:w-full aspect-square sm:aspect-3/2 object-cover shrink-0 rounded-lg border border-border" src={course.image} alt={course.title} />
                    <div className="w-full flex flex-col gap-2 sm:gap-4">
                        <header className="flex flex-col sm:gap-2">
                            <Heading className="line-clamp-2 text-body-medium/5" level={3} size={{ base: 6, sm: 6 }}>
                                {course.title}
                            </Heading>
                            <Text className="hidden sm:inline-block sm:line-clamp-2" weight="medium">
                                {course.description}
                            </Text>
                        </header>
                        <div className="flex gap-2">
                            <Image className="size-9 sm:size-10 object-cover rounded-lg" src={course.instructor.avatar} alt={course.instructor.name} />
                            <div className="flex flex-col">
                                <Text className="line-clamp-1" variant="primary" weight="medium" size="sm">
                                    {course.instructor.name}
                                </Text>
                                <div className="flex gap-1 items-baseline">
                                    <Text variant="secondary" size="xs">
                                        {course.instructor.role}
                                    </Text>
                                    <div className="hidden sm:flex gap-1">
                                        <Text variant="secondary" size="xs">
                                            di
                                        </Text>
                                        <Text variant="secondary" size="xs" weight="bold">
                                            {course.instructor.organization}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <Star className="fill-warning stroke-none" size={20} />
                            <Star className="fill-warning stroke-none" size={20} />
                            <Star className="fill-warning stroke-none" size={20} />
                            <Star className="fill-border stroke-none" size={20} />
                            <Star className="fill-border stroke-none" size={20} />
                        </div>
                        <Text className="line-clamp-1 underline underline-offset-2" variant="secondary" size="xs">
                            {course.rating} ({course.review})
                        </Text>
                    </div>
                    <Heading className="line-clamp-1 text-primary" level={4} size={{ base: 5, sm: 4 }}>
                        {formatPrice(course.price)}
                    </Heading>
                </div>
            </div>
            {(onEdit || onDelete) && (
                <div className="p-4 sm:p-5 flex justify-end gap-4 border-t border-border">
                    {onEdit && (
                        <Button variant="secondary" type="button" onClick={() => onEdit(course)}>
                            Edit
                        </Button>
                    )}
                    {onDelete && (
                        <Button className="bg-error-background text-error" type="button" onClick={() => onDelete(course)}>
                            Hapus
                        </Button>
                    )}
                </div>
            )}
        </article>
    );
};

export default CourseCard;
