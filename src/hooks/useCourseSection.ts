import { useEffect, useState } from "react";
import { COURSES, type ICourse } from "../constants/courses";

const useCourseSection = () => {
    const [isCustom, setIsCustom] = useState(false);
    const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
    const [isOpenFormModal, setIsOpenFormModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
    const [courses, setCourses] = useState<ICourse[]>(COURSES);
    const [draftCourses, setDraftCourses] = useState<ICourse[]>([]);

    useEffect(() => {
        if (isOpenDetailModal || isOpenFormModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isOpenDetailModal, isOpenFormModal]);

    const handleOpenCustom = () => {
        setIsCustom(true);
        setDraftCourses(courses);
    };
    const handleCloseCustom = () => {
        setIsCustom(false);
        setDraftCourses([]);
        setSelectedCourse(null);
    };
    const handleSaveCustom = () => {
        setCourses(draftCourses);
        setDraftCourses([]);
        setIsCustom(false);
    };
    const handleEdit = (course: ICourse) => {
        setSelectedCourse(course);
        setIsOpenFormModal(true);
    };
    const handleDelete = (course: ICourse) => {
        setDraftCourses((prev) => prev.filter((item) => item.id !== course.id));
        alert("Hapus data berhasil!");
    };
    const handleOpenAdd = () => {
        setIsOpenFormModal(true);
    };
    const handleCloseFormModal = () => {
        setIsOpenFormModal(false);
        setSelectedCourse(null);
    };
    const handleSubmitFormModal = (course: ICourse) => {
        if (selectedCourse) {
            setDraftCourses((prev) => prev.map((item) => (item.id === course.id ? course : item)));
        } else {
            setDraftCourses((prev) => [course, ...prev]);
        }
    };
    const handleOpenDetail = (course: ICourse) => {
        setSelectedCourse(course);
        setIsOpenDetailModal(true);
    };
    const handleCloseDetailModal = () => {
        setIsOpenDetailModal(false);
        setSelectedCourse(null);
    };

    return {
        isCustom,
        isOpenDetailModal,
        isOpenFormModal,
        selectedCourse,
        courses,
        draftCourses,
        handleOpenCustom,
        handleCloseCustom,
        handleSaveCustom: isCustom ? handleSaveCustom : undefined,
        handleEdit: isCustom ? handleEdit : undefined,
        handleDelete: isCustom ? handleDelete : undefined,
        handleOpenDetail: isCustom ? handleOpenDetail : undefined,
        handleCloseDetailModal,
        handleOpenAdd: isCustom ? handleOpenAdd : undefined,
        handleCloseFormModal,
        handleSubmitFormModal: isCustom ? handleSubmitFormModal : undefined,
    };
};

export default useCourseSection;
