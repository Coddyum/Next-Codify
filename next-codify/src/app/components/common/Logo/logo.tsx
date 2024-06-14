"use client";

import Image from "next/image";
import LogoSVG from "../../../../../public/SVG/Logo.svg";

const Logo = () => {
    return (
        <>
            <div className="flex flex-row mr-auto items-center font-medium">
                <Image src={LogoSVG} alt="Logo" width={24} height={30} className="mr-1" />
                <h2 className="text-white flex items-center">
                    <span className="text-or-300">Cod</span>ify
                </h2>
            </div>
        </>
    );
};

export default Logo;
