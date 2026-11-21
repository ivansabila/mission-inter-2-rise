import { useEffect, useRef, useState } from "react";
import type { ICourseFormModalProps } from "../components/organisms/CourseFormModal";
import type { ICourse } from "../constants/courses";

const useCourseFormModal = ({ onClose, onSubmit, course }: ICourseFormModalProps) => {
    const [formData, setFormData] = useState({
        title: course?.title || "",
        description: course?.description || "",
        instructorName: course?.instructor.name || "",
        instructorRole: course?.instructor.role || "",
        instructorOrganization: course?.instructor.organization || "",
        price: course?.price.toString() || "",
    });
    const dropdownRef = useRef<HTMLFormElement>(null);

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

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            title: formData.title.trim(),
            description: formData.description.trim(),
            instructorName: formData.instructorName.trim(),
            instructorRole: formData.instructorRole.trim(),
            instructorOrganization: formData.instructorOrganization.trim(),
            price: formData.price.trim(),
        };

        if (!data.title || !data.description || !data.instructorName || !data.instructorRole || !data.instructorOrganization || !data.price) {
            return alert("Isi field yang wajib!");
        }

        const cleanPriceString = data.price.replace(/\D/g, "");
        if (!cleanPriceString || isNaN(Number(cleanPriceString))) {
            return alert("Format harga tidak valid. Masukkan angka saja!");
        }

        let payload: ICourse;

        if (course) {
            payload = {
                ...course,
                title: data.title,
                description: data.description,
                instructor: {
                    ...course.instructor,
                    name: data.instructorName,
                    role: data.instructorRole,
                    organization: data.instructorOrganization,
                },
                price: Number(cleanPriceString),
            };
        } else {
            const randomIndex = Math.floor(Math.random() * 9) + 1;

            payload = {
                id: Date.now().toString(),
                image: `/images/card-image-${randomIndex}.jpg`,
                title: data.title,
                description: data.description,
                instructor: {
                    avatar: `/images/card-profile-${randomIndex}.png`,
                    name: data.instructorName,
                    role: data.instructorRole,
                    organization: data.instructorOrganization,
                },
                rating: 0,
                review: 0,
                price: Number(cleanPriceString),
                createdAt: Date.now().toString(),
            };
        }

        if (!onSubmit) return;

        onSubmit?.(payload);
        alert(course ? "Edit data berhasil!" : "Tambah data berhasil!");
        onClose();
    };

    return { formData, dropdownRef, handleChange, handleSubmit };
};

export default useCourseFormModal;
