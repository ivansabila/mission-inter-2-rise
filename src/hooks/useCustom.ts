import { useCallback, useEffect, useState } from "react";
import type { ICourse } from "../constants/courses";

const useCustom = () => {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);

    useEffect(() => {
        if (isOpenDetail || isOpenAdd) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    });

    const handleEdit = () => {
        console.log("EDIT COURSE");
    };
    const handleDelete = () => {
        console.log("HAPUS COURSE");
    };
    const handleOpenDetail = (course: ICourse) => {
        setSelectedCourse(course);
        setIsOpenDetail(true);
    };
    const handleCloseDetail = useCallback(() => {
        setIsOpenDetail(false);
        setSelectedCourse(null);
    }, []);
    const handleOpenAddCourse = () => {
        setIsOpenAdd(true);
    };
    const handleCloseAddCourse = useCallback(() => {
        setIsOpenAdd(false);
    }, []);

    return {
        handleEdit,
        handleDelete,
        handleOpenDetail,
        isOpenDetail,
        handleCloseDetail,
        selectedCourse,
        handleOpenAddCourse,
        handleCloseAddCourse,
        isOpenAdd,
    };
};

export default useCustom;
