"use client"

import React from "react";

interface DefaultBtnProps {
    text: string; // Définissez le type de la prop text comme une chaîne de caractères
}

const DefaultBtn: React.FC<DefaultBtnProps> = ({ text }) => {
    return (
        <>
            <button className="w-auto h-auto p-2 ml-2 flex items-center justify-center border-2 border-or-300 rounded-lg text-white font-medium text-sm">
                {text}
            </button>
        </>
    );
};

export default DefaultBtn;