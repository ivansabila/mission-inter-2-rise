import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import { X } from "lucide-react";
import FormField from "../molecules/FormField";
import useCourseFormModal from "../../hooks/useCourseFormModal";
import type { ICourse } from "../../constants/courses";

export interface ICourseFormModalProps {
    onClose: () => void;
    onSubmit?: (course: ICourse) => void;
    course?: ICourse | null;
}

const CourseFormModal = (props: ICourseFormModalProps) => {
    const { onClose, course } = props;

    const { formData, dropdownRef, handleChange, handleSubmit } = useCourseFormModal(props);

    return (
        <dialog className="fixed inset-0 size-full p-5 flex justify-center items-center bg-black/25 backdrop-blur-sm z-20">
            <form className="w-full max-w-147.5 max-h-[85vh] flex flex-col bg-background-primary border border-border rounded-lg overflow-hidden" ref={dropdownRef} onSubmit={handleSubmit}>
                <div className="p-4 sm:p-5 flex justify-between items-center gap-4 border-b border-border bg-background-primary shrink-0">
                    <Heading className="text-body-medium/5" level={2} size={{ base: 6, sm: 6 }}>
                        {course ? "Edit Kelas" : "Tambah Kelas"}
                    </Heading>
                    <Button variant="ghost" size="icon" type="button" onClick={onClose}>
                        <X size={20} />
                    </Button>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-4 sm:gap-6 overflow-y-auto">
                    <FormField label="Judul Kelas" id="title" required value={formData.title} onChange={(e) => handleChange("title", e.target.value)} />
                    <FormField label="Deskripsi Kelas" id="description" required value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
                    <FormField label="Nama Pengajar" id="instructorName" required value={formData.instructorName} onChange={(e) => handleChange("instructorName", e.target.value)} />
                    <FormField label="Pekerjaan Pengajar" id="instructorRole" required value={formData.instructorRole} onChange={(e) => handleChange("instructorRole", e.target.value)} />
                    <FormField label="Kantor Pengajar" id="instructorOrganization" required value={formData.instructorOrganization} onChange={(e) => handleChange("instructorOrganization", e.target.value)} />
                    <FormField label="Harga Kelas" id="price" required value={formData.price} onChange={(e) => handleChange("price", e.target.value)} />
                </div>
                <div className="p-4 sm:p-5 flex justify-end gap-4 border-t border-border bg-background-primary shrink-0">
                    <Button className="bg-error-background text-error" type="button" onClick={onClose}>
                        Batal
                    </Button>
                    <Button>Simpan</Button>
                </div>
            </form>
        </dialog>
    );
};

export default CourseFormModal;
