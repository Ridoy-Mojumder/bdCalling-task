import BannerSection from "../BannerSection/BannerSection";
import FifthSection from "../BannerSection/FifthSection";
import FourthSection from "../BannerSection/FourthSection";
import LastSection from "../BannerSection/LastSection";
import QuestionSection from "../BannerSection/QuestionSection";
import SecoundSection from "../BannerSection/SecoundSection";
import ThirdSection from "../BannerSection/ThirdSection";


const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <SecoundSection></SecoundSection>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection>
            <FifthSection></FifthSection>
            <QuestionSection></QuestionSection>
            <LastSection></LastSection>
        </div>
    );
};

export default Home;