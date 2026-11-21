import Button from "../components/atoms/Button";
import Heading from "../components/atoms/Heading";
import Text from "../components/atoms/Text";
import CourseList from "../components/organisms/CourseList";
import { COURSES } from "../constants/courses";
import useCustom from "../hooks/useCustom";
import CourseDetailModal from "../components/organisms/CourseDetailModal";
import CourseFormModal from "../components/organisms/CourseFormModal";

const Custom = () => {
    const { handleEdit, handleDelete, handleOpenDetail, handleCloseDetail, isOpenDetail, selectedCourse, handleOpenAddCourse, handleCloseAddCourse, isOpenAdd } = useCustom();

    return (
        <div className="relative w-full flex flex-col">
            <section className="flex flex-col gap-6 sm:gap-8">
                <header className="flex flex-col gap-2.5">
                    <Heading level={1} size={{ base: 4, sm: 3 }}>
                        Koleksi Video Pembelajaran Unggulan
                    </Heading>
                    <Text weight="medium">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</Text>
                </header>
                <div className="flex gap-4">
                    <Button className="bg-error-background text-error" type="button">
                        Batal
                    </Button>
                    <Button variant="primary">Selesai</Button>
                </div>
                <Button className="gap-2 bg-background-primary" variant="outline" onClick={handleOpenAddCourse}>
                    Tambah Kelas
                </Button>
                <CourseList courses={COURSES} onEdit={handleEdit} onDelete={handleDelete} onDetail={handleOpenDetail} />
            </section>
            {isOpenAdd && <CourseFormModal onClose={handleCloseAddCourse} />}
            {isOpenDetail && <CourseDetailModal onClose={handleCloseDetail} course={selectedCourse} />}
        </div>
    );
};

export default Custom;
