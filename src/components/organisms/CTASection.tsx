import Image from "../atoms/Image";
import ctaImage from "../../assets/cta-image.jpg";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const CTASection = () => {
    return (
        <section className="relative px-4 py-12 sm:py-23 flex justify-center rounded-sm overflow-hidden">
            <div className="absolute inset-0">
                <Image className="size-full object-cover" src={ctaImage} alt="cta image" />
                <div className="absolute inset-0 bg-black/75" />
            </div>
            <div className="relative z-10 max-w-131.25 flex flex-col items-center gap-10">
                <div className="flex flex-col gap-1 text-center">
                    <Text variant="inverse-secondary" weight="medium" size="md">
                        NEWSLETTER
                    </Text>
                    <header className="flex flex-col gap-2.5">
                        <Heading variant="inverse" level={2} size={{ base: 4, sm: 3 }}>
                            Mau Belajar Lebih Banyak?
                        </Heading>
                        <Text variant="inverse-secondary" weight="medium">
                            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com
                        </Text>
                    </header>
                </div>
                <form className="relative w-full flex flex-col justify-center gap-4" action="#">
                    <Input className="sm:pr-32 text-center sm:text-left" placeholder="Masukkan Emailmu" />
                    <Button className="sm:absolute sm:right-0.75 h-12 sm:h-10.5">Subscribe</Button>
                </form>
            </div>
        </section>
    );
};

export default CTASection;
