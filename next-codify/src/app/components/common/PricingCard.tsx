"use client";

import React from "react";
import DefaultBtn from "./Button/DefaultBtn";
import Link from "next/link";

interface PricingCardProps {
    titre: string;
    text: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ titre, text }) => {
    return (
        <div className="w-auto h-auto bg-transparent rounded-2xl border-2 border-or-300">
            <h2 className="text-white text-lg font-medium px-40 py-2 text-center">
                {titre}
            </h2>
            <hr className="border-or-300" />
            <div className="flex items-center justify-center my-4">
            <Link href="/pages/signup">
                <DefaultBtn text={text} />
            </Link>
            </div>
        </div>
    );
};

export default PricingCard;