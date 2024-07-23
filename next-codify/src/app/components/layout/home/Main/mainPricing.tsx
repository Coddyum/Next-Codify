"use client";

import PricingCard from "@/app/components/common/PricingCard";

export default function MainPricing() {
    return (
        <>
            <div className="w-screen h-auto mt-2">
                <div className="max-w-screen-xl flex items-center justify-center mx-auto">
                    <h2 className="text-white text-2xl font-medium my-14">
                        PRICING
                    </h2>
                </div>
                <div className="max-w-screen-xl h-auto flex items-center justify-center my-4 mx-auto gap-12">
                        <PricingCard titre="Free" text="Try for free" />
                        <PricingCard titre="Hacker" text="Become an Hacker" />
                        <PricingCard titre="Sensei" text="Become an Sensai" />
                </div>
            </div>
        </>
    );
}
