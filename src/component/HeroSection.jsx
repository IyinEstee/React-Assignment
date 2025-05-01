import { IoArrowForwardSharp } from "react-icons/io5";

const HeroSection = () => {
    return(
        <section className="h-screen flex flex-column justify-center item-center">
         <div className="text-center space-y-6">
            <p className="text-[#717171] text-capitalize text-[14px] font-bold">ALL-IN-ONE MARKETING</p>
            <h1 className="text-[62px] font-bold">Send emails, automate marketing,
            monetize content – in one place</h1>
            <p className="text-[15px]">Grow your business and boost revenue with an easy, affordable platform that brings email,<br/>  automation, online courses and paid newsletters together.</p>
            <button className="bg-[#fbe30c] border-2 px-8 py-4 rounded-3xl font-bold  hover:text-white hover:bg-[#00a2ff]">
                <div className="flex items-center gap-1">
                Start 30-day Free trial<IoArrowForwardSharp/>
                </div>
                </button>
            <p className="text-[10px]">Try us free  |  No credit card required  |  Cancel anytime</p>
         </div>
        </section>
        
    )
};

export default HeroSection;