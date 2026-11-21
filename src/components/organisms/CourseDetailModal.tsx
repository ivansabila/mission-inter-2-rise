import { Star, X } from "lucide-react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { useEffect, useRef } from "react";
import type { ICourse } from "../../constants/courses";
import imageDefault from "/images/image-default.png";
import { formatFullPrice } from "../../utils/formatPrice";

export interface ICourseDetailModalProps {
    onClose: () => void;
    course?: ICourse | null;
}

const CourseDetailModal = (props: ICourseDetailModalProps) => {
    const { onClose, course } = props;

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (event.target instanceof Node && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);

    return (
        <dialog className="fixed inset-0 size-full p-5 flex justify-center items-center bg-black/25 backdrop-blur-sm z-20">
            <div className="w-full max-w-147.5 max-h-[85vh] flex flex-col bg-background-primary border border-border rounded-lg overflow-hidden" ref={dropdownRef}>
                <div className="p-4 sm:p-5 flex justify-between items-center gap-4 border-b border-border shrink-0">
                    <Heading className="text-body-medium/5" level={2} size={{ base: 6, sm: 6 }}>
                        Detail Kelas
                    </Heading>
                    <Button variant="ghost" size="icon" type="button" onClick={onClose}>
                        <X size={20} />
                    </Button>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-4 sm:gap-6 overflow-y-auto">
                    <Image className="h-auto w-full aspect-3/2 object-cover shrink-0 rounded-lg border border-border" src={course?.image || imageDefault} alt={course?.title || "course image"} />
                    <header className="flex flex-col gap-2">
                        <Heading className="text-body-medium/5" level={3} size={{ base: 5, sm: 4 }}>
                            {course?.title}
                        </Heading>
                        <Text weight="medium">{course?.description}</Text>
                    </header>
                    <div className="flex gap-2">
                        <Image className="size-9 sm:size-10 object-cover rounded-lg" src={course?.instructor.avatar || imageDefault} alt={course?.instructor.name || "avatar image"} />
                        <div className="flex flex-col">
                            <Text className="line-clamp-1" variant="primary" weight="medium" size="sm">
                                {course?.instructor.name}
                            </Text>
                            <div className="flex gap-1 items-baseline">
                                <Text variant="secondary" size="xs">
                                    {course?.instructor.role}
                                </Text>
                                <div className="hidden sm:flex gap-1">
                                    <Text variant="secondary" size="xs">
                                        di
                                    </Text>
                                    <Text variant="secondary" size="xs" weight="bold">
                                        {course?.instructor.organization}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <Star className="fill-warning stroke-none" size={20} />
                            <Star className="fill-warning stroke-none" size={20} />
                            <Star className="fill-warning stroke-none" size={20} />
                            <Star className="fill-border stroke-none" size={20} />
                            <Star className="fill-border stroke-none" size={20} />
                        </div>
                        <Text className="line-clamp-1 underline underline-offset-2" variant="secondary" size="xs">
                            {course?.rating} (dari {course?.review} review)
                        </Text>
                    </div>
                    <Heading className="line-clamp-1 text-primary" level={4} size={{ base: 5, sm: 4 }}>
                        {formatFullPrice(course?.price || 0)}
                    </Heading>
                </div>
            </div>
        </dialog>
    );
};

export default CourseDetailModal;
