import { useState } from "react";
import { useNavigate } from "react-router";
import { USERS } from "../constants/users";

const useLoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            email: formData.email.trim(),
            password: formData.password,
        };

        if (!data.email || !data.password) {
            return alert("Isi field yang wajib!");
        }

        const existingUser = USERS.find((user) => user.email === data.email);
        if (!existingUser) {
            return alert("Email tidak terdaftar!");
        } else {
            if (existingUser.password !== data.password) {
                return alert("Password tidak cocok!");
            }
        }

        alert("Login berhasil!");
        navigate("/");
    };
    const goToRegister = () => {
        navigate("/register");
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        goToRegister,
    };
};

export default useLoginForm;
