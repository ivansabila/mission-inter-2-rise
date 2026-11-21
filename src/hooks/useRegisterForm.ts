import { useState } from "react";
import { COUNTRY_CODE_OPTIONS, GENDER_OPTIONS } from "../constants/options";
import { useNavigate } from "react-router";
import { USERS } from "../constants/users";

const useRegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: GENDER_OPTIONS[0].value,
        countryCode: COUNTRY_CODE_OPTIONS[0].value,
        phoneNumber: "",
        password: "",
        passwordConfirm: "",
    });
    const navigate = useNavigate();

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            gender: formData.gender.trim(),
            countryCode: formData.countryCode.trim(),
            phoneNumber: formData.phoneNumber.trim(),
            password: formData.password,
            passwordConfirm: formData.passwordConfirm,
        };

        if (!data.name || !data.email || !data.gender || !data.countryCode || !data.phoneNumber || !data.password || !data.passwordConfirm) {
            return alert("Isi field yang wajib!");
        }
        if (data.password !== data.passwordConfirm) {
            return alert("Kata Sandi Tidak Cocok!");
        }
        const existingUser = USERS.find((user) => user.email === data.email);
        if (existingUser) return alert("Email sudah terdaftar!");

        const newUser = {
            id: Date.now().toString(),
            name: data.name,
            email: data.email,
            gender: data.gender,
            phone: `${data.countryCode}${data.phoneNumber}`,
            password: data.password,
            createdAt: Date.now().toString(),
        };
        USERS.push(newUser);
        alert("Register berhasil!");
        navigate("/login");
    };
    const goToLogin = () => {
        navigate("/login");
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        goToLogin,
    };
};

export default useRegisterForm;
