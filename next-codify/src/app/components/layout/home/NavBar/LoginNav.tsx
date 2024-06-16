"use client";

import Logo from "@/app/components/common/Logo/logo";
import Link from "next/link";

const LoginNav = () => {
    return (
        <>
            <div className="w-screen flex items-center justify-center mx-auto">
                <div className="flex justify-between items-center py-4">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginNav;
