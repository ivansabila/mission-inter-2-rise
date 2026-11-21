import { useState } from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import CourseCategory from "../molecules/CourseCategory";
import CourseList from "./CourseList";
import Button from "../atoms/Button";
import useCourseSection from "../../hooks/useCourseSection";
import CourseDetailModal from "./CourseDetailModal";
import CourseFormModal from "./CourseFormModal";

const CourseSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const {
        isCustom,
        isOpenDetailModal,
        isOpenFormModal,
        selectedCourse,
        courses,
        draftCourses,
        handleOpenCustom,
        handleCloseCustom,
        handleSaveCustom,
        handleEdit,
        handleDelete,
        handleOpenDetail,
        handleCloseDetailModal,
        handleOpenAdd,
        handleCloseFormModal,
        handleSubmitFormModal,
    } = useCourseSection();

    return (
        <section className="flex flex-col gap-6 sm:gap-8">
            <header className="flex flex-col gap-2.5">
                <Heading level={2} size={{ base: 4, sm: 3 }}>
                    Koleksi Video Pembelajaran Unggulan
                </Heading>
                <Text weight="medium">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</Text>
            </header>
            <CourseCategory value={activeCategory} onChange={setActiveCategory} />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-x-6 sm:gap-y-8">
                {isCustom ? (
                    <>
                        <Button className="sm:col-span-2" variant="primary" type="button" onClick={handleSaveCustom}>
                            Selesai
                        </Button>
                        <Button className="bg-error-background text-error" type="button" onClick={handleCloseCustom}>
                            Batal
                        </Button>
                        <Button className="bg-background-primary col-span-full" variant="outline" type="button" onClick={handleOpenAdd}>
                            Tambah Kelas
                        </Button>
                    </>
                ) : (
                    <Button className="bg-background-primary col-span-full" variant="outline" type="button" onClick={handleOpenCustom}>
                        Custom Data
                    </Button>
                )}
            </div>
            <CourseList courses={isCustom ? draftCourses : courses} onEdit={handleEdit} onDelete={handleDelete} onDetail={handleOpenDetail} />
            {isOpenDetailModal && <CourseDetailModal onClose={handleCloseDetailModal} course={selectedCourse} />}
            {isOpenFormModal && <CourseFormModal onClose={handleCloseFormModal} onSubmit={handleSubmitFormModal} course={selectedCourse} />}
        </section>
    );
};

export default CourseSection;
