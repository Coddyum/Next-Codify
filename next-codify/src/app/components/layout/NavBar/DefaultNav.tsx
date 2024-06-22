"use client";

import DefaultBtn from "@/app/components/common/Button/DefaultBtn";
import Logo from "@/app/components/common/Logo/logo";
import Link from "next/link";

const DefaultNav = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-down animate-duration-1000 animate-ease-in">
                <div className="flex justify-between items-center py-3">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <Link href="/pages/signup">
                        <DefaultBtn text={"Get Started"} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DefaultNav;
