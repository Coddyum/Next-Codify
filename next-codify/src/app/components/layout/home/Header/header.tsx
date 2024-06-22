"use client";

import Image from "next/image";
import RoadMapPage from "../../../../../../public/SVG/roadmap-pages.svg"
import DefaultBtn from "@/app/components/common/Button/DefaultBtn";

const Header = () => {
    return (
        <>
            <div className="w-screen h-full pb-28 bg-gradient-to-br to-or-300 via-transparent from-transparent">
                <div className="max-w-screen-xl mx-auto bg-transparent ">
                    <div className="text-center max-w-screen-lg mx-auto pt-36">
                        <h1 className="text-7xl text-white leading-snug tracking-tight animate-fade-left animate-duration-1000 animate-ease-in">
                            <span className="text-or-300">Cod</span>
                            ify your learning like never before
                        </h1>
                        <p className="text-white font-medium mt-4 animate-fade-right animate-duration-1000 animate-ease-in">
                            Access an innovative learning platform that enhances
                            your understanding and helps you master complex
                            concepts. Transform the way you learn with
                            interactive and effective methods.
                        </p>
                    </div>
                    <div className="pt-16 flex items-center justify-center font-bold animate-fade animate-duration-1000 animate-delay-700 animate-ease-in-out">
                        <DefaultBtn text={"Get Started"} />
                    </div>
                </div>
            </div>

            {/* preview of the roadmap selection */}

            <div className="w-screen h-full pb-36 bg-gradient-to-tr to-or-300 via-transparent from-transparent">
                <div className="bg-transparent">
                    <Image src={RoadMapPage} alt="Logo" width={1280} className="mx-auto  z-30 animate-fade-up animate-duration-1000 animate-delay-700 animate-ease-in-out"/>
                </div>
            </div>
        </>
    );
};

export default Header;
