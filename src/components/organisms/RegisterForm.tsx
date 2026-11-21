import Button from "../atoms/Button";
import Image from "../atoms/Image";
import FormField from "../molecules/FormField";
import PasswordField from "../molecules/PasswordField";
import googleImage from "../../assets/google.svg";
import Anchor from "../atoms/Anchor";
import Text from "../atoms/Text";
import SelectField from "../molecules/SelectField";
import { COUNTRY_CODE_OPTIONS, GENDER_OPTIONS } from "../../constants/options";
import PhoneField from "../molecules/PhoneField";
import useRegisterForm from "../../hooks/useRegisterForm";

const RegisterForm = () => {
    const { formData, handleChange, handleSubmit, goToLogin } = useRegisterForm();

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <FormField label="Nama Lengkap" id="full-name" required value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
                    <FormField label="E-Mail" id="email" required type="email" autoComplete="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
                    <SelectField label="Jenis Kelamin" id="gender" required options={GENDER_OPTIONS} value={formData.gender} onChange={(value) => handleChange("gender", value)} />
                    <PhoneField
                        label="No. Hp"
                        id="phone"
                        required
                        options={COUNTRY_CODE_OPTIONS}
                        selectValue={formData.countryCode}
                        selectOnChange={(value) => handleChange("countryCode", value)}
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    />
                    <PasswordField label="Kata Sandi" id="password" required autoComplete="new-password" value={formData.password} onChange={(e) => handleChange("password", e.target.value)} />
                    <PasswordField label="Konfirmasi Kata Sandi" id="password-confirm" required autoComplete="new-password" value={formData.passwordConfirm} onChange={(e) => handleChange("passwordConfirm", e.target.value)} />
                    <Anchor className="self-end" to="#">
                        Lupa Password?
                    </Anchor>
                </div>
                <div className="flex flex-col gap-4">
                    <Button>Daftar</Button>
                    <Button variant="secondary" type="button" onClick={goToLogin}>
                        Masuk
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <hr className="flex-1 border border-border" />
                <Text>atau</Text>
                <hr className="flex-1 border border-border" />
            </div>
            <Button className="flex justify-center items-center gap-2" variant="outline" type="button">
                <Image className="h-5 w-auto object-contain" src={googleImage} alt="google image" />
                Masuk dengan Google
            </Button>
        </form>
    );
};

export default RegisterForm;
