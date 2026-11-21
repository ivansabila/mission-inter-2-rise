import heroImage from "../../assets/hero-image.jpg";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

const HeroSection = () => {
    return (
        <section className="relative px-5 sm:px-35 py-9 sm:py-20.5 border border-border rounded-lg overflow-hidden">
            <div className="absolute inset-0">
                <Image className="size-full object-cover" src={heroImage} alt="hero image" />
                <div className="absolute inset-0 bg-black/75" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-6">
                <header className="flex flex-col gap-3 text-center">
                    <Heading variant="inverse" level={1} size={{ base: 4, sm: 1 }}>
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </Heading>
                    <Text variant="inverse-secondary" weight="medium">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </Text>
                </header>
                <Button className="h-auto sm:w-fit">Temukan Video Course untuk Dipelajari!</Button>
            </div>
        </section>
    );
};

export default HeroSection;
