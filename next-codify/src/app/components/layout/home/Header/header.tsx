"use client";

import Image from "next/image";
import RoadMapPage from "../../../../../../public/SVG/roadmap-pages.svg";
import DefaultBtn from "@/app/components/common/Button/DefaultBtn";

const Header = () => {
    return (
        <>
            <div className="w-screen h-full pb-28 bg-gradient-to-br from-transparent via-transparent to-or-300">
                <div className="max-w-screen-xl mx-auto pt-36">
                    <div className="text-center max-w-screen-lg mx-auto">
                        <h1 className="text-7xl text-white leading-snug tracking-tight animate-fade-left duration-1000 ease-in">
                            <span className="text-or-300">Cod</span>
                            ify your learning like never before
                        </h1>
                        <p className="text-white font-medium mt-4 animate-fade-right duration-1000 ease-in">
                            Access an innovative learning platform that enhances
                            your understanding and helps you master complex
                            concepts. Transform the way you learn with
                            interactive and effective methods.
                        </p>
                    </div>
                    <div className="pt-16 flex items-center justify-center font-bold animate-fade duration-1000 delay-700 ease-in-out">
                        <DefaultBtn text={"Get Started"} />
                    </div>
                </div>
            </div>
        
            <div className="w-screen h-full pb-36 bg-gradient-to-tr from-transparent via-transparent to-or-300">
                <Image src={RoadMapPage} alt="Logo" width={1280} className="mx-auto z-30 animate-fade-up duration-1000 delay-700 ease-in-out"/>
            </div>
        </>
    );
};

export default Header;