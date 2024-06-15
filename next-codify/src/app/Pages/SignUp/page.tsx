"use client";

import "../../globals.css";
import LoginNav from "@/app/components/layout/home/NavBar/LoginNav";

export default function signup() {
    return (
        <>
            <div className="w-screen h-auto">
                <LoginNav/>
                <div className="max-w-screen-xl h-auto  flex items-center justify-center mx-auto">
                    <div className="border-2 border-or-300 rounded-2xl mt-56">
                        <h1 className="text-white text-lg font-medium px-48 py-4">
                            Sign Up
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
