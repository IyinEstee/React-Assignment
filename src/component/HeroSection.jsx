import { useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const HeroSection = () => {
    const [subscribed, setSubscribed] = useState(true)
    
    function Subscribe() {
        setSubscribed(false);
    };
    return(
        <section className="h-full flex flex-col justify-center item-center px-4">
         <div className="text-center space-y-7">
            <p className="text-[#717171] text-capitalize text-[14px] font-bold">ALL-IN-ONE MARKETING</p>
            <h1 className="lg:text-[62px] text-[40px] font-bold leading-tight text-balance">Send emails, automate marketing, monetize content – in one place</h1>
            <p className="text-[15px]">Grow your business and boost revenue with an easy, affordable platform that brings email,<br/>  automation, online courses and paid newsletters together.</p>
             <button onClick={Subscribe} className="bg-[#fbe30c] border-2 px-8 py-4 rounded-3xl font-bold  hover:text-white hover:bg-[#00a2ff]">
                {subscribed ? <div className="flex items-center gap-1">
                Start 30-day Free trial<IoArrowForwardSharp/>
                </div> : <button>You are now subscribed!</button> }
                </button>
            <p className="text-[10px]">Try us free  |  No credit card required  |  Cancel anytime</p>
         </div>
        </section>
        
    )
};

export default HeroSection;