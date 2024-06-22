"use client"

import React from "react";

interface DefaultBtnProps {
    text: string;
}

const DefaultBtn: React.FC<DefaultBtnProps> = ({ text }) => {
    return (
        <>
            <button className="w-auto h-auto p-2 ml-2 flex items-center justify-center border-2 border-or-300 rounded-lg text-white font-medium text-sm transition duration-500 ease-out hover:bg-or-300 hover:text-slate-950">
                {text}
            </button>
        </>
    );
};

export default DefaultBtn; 
