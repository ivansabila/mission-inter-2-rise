import Heading from "../components/atoms/Heading";
import Text from "../components/atoms/Text";
import RegisterForm from "../components/organisms/RegisterForm";

const Register = () => {
    return (
        <div className="w-full max-w-147.5 p-5 sm:p-9 flex flex-col gap-5 sm:gap-9 border border-border rounded-lg bg-background-primary">
            <header className="flex flex-col text-center gap-2.5">
                <Heading level={1} size={{ base: 4, sm: 3 }}>
                    Pendaftaran Akun
                </Heading>
                <Text>Yuk, daftarkan akunmu sekarang juga!</Text>
            </header>
            <RegisterForm />
        </div>
    );
};

export default Register;
