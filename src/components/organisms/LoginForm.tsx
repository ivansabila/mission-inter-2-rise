import Button from "../atoms/Button";
import Image from "../atoms/Image";
import FormField from "../molecules/FormField";
import PasswordField from "../molecules/PasswordField";
import googleImage from "../../assets/google.svg";
import Anchor from "../atoms/Anchor";
import Text from "../atoms/Text";
import useLoginForm from "../../hooks/useLoginForm";

const LoginForm = () => {
    const { formData, handleChange, handleSubmit, goToRegister } = useLoginForm();

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <FormField label="E-Mail" id="email" required type="email" autoComplete="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
                    <PasswordField label="Kata Sandi" id="password" required autoComplete="current-password" value={formData.password} onChange={(e) => handleChange("password", e.target.value)} />
                    <Anchor className="self-end" to="#">
                        Lupa Password?
                    </Anchor>
                </div>
                <div className="flex flex-col gap-4">
                    <Button>Masuk</Button>
                    <Button variant="secondary" type="button" onClick={goToRegister}>
                        Daftar
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

export default LoginForm;
