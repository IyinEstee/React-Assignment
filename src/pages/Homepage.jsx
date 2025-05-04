import Example from "../component/Examples";
import Footer from "../component/Footer"
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar"
import Percentage from "../component/percentage";
import StaffCard from "../component/StaffCard";

const Homepage = () => {
    return(
        <div>
        <Navbar/>
        <HeroSection/>
        <Percentage/>
        <Example/>
        <div className="flex">
        <StaffCard name="Mike" position="Human Resources" department="HR" image="https://randomuser.me/api/portraits/men/32.jpg"/>
        <StaffCard name="Mary" position="Web Developer" department="IT" image="https://randomuser.me/api/portraits/women/44.jpg"/>
        <StaffCard name="Victor" position="Human Resources" department="HR" image="https://randomuser.me/api/portraits/men/22.jpg"/>
        </div>
        <Footer/>
        
        </div>
        
    );
};
export default Homepage;