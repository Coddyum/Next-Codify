"use client";

import Cursor from "@/app/hooks/cursor";
import "@/app/components/layout/home/Main/MainBento.css";

export default function Main() {
    return (
        <>
            <Cursor />
            <div className="w-screen h-auto">
                <div
                    className="max-w-screen-xl mx-auto flex gap-5 flex-wrap container mb-24"
                    style={{ "--clr": "#ecb99d" } as React.CSSProperties}>
                    <div className="flex flex-col gap-5 ml-5">
                        <div className="flex gap-5">
                            <div className="card w-300 h-300 bg-transparent border border-gray-900 rounded-3xl flex items-center justify-center">
                                <div className="w-[294px] h-[294px] bg-bunker-950 rounded-3xl z-20"></div>
                            </div>
                            <div className="card2 card w-600 h-300 bg-transparent border border-gray-900 rounded-3xl flex items-center justify-center">
                                <div className="w-[594px] h-[294px] bg-bunker-950 rounded-3xl z-20"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="card2 card w-600 h-300 bg-transparent border border-gray-900 rounded-3xl flex items-center justify-center">
                                <div className="w-[594px] h-[294px] bg-bunker-950 rounded-3xl z-20"></div>
                            </div>
                            <div className="card w-300 h-300 bg-transparent border border-gray-900 rounded-3xl flex items-center justify-center">
                                <div className="w-[294px] h-[294px] bg-bunker-950 rounded-3xl z-20"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card3 card w-300 h-616 bg-transparent border border-gray-900 rounded-3xl flex items-center justify-center">
                        <div className="w-[294px] h-[610px] bg-bunker-950 rounded-3xl z-20"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
