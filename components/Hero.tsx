import Image from "next/image";
import React from "react";
import HeroImg from "@/public/assets/covid-pandemic-lifestyle-concept-girl-wearing-medical-mask-shopping-malls-holding-paper-ba.jpg"
const Hero = () => {
    return (
        <div>
            <Image src={HeroImg} alt="img" className="h-[100vh]" />
        </div>
    );
};

export default Hero;
