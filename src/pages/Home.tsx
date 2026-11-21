import CourseSection from "../components/organisms/CourseSection";
import CTASection from "../components/organisms/CTASection";
import HeroSection from "../components/organisms/HeroSection";

const Home = () => {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-16">
            <HeroSection />
            <CourseSection />
            <CTASection />
        </div>
    );
};

export default Home;
