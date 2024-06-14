"use client";

import Cursor from "@/app/hooks/cursor";
import "@/app/components/layout/home/Main/MainBento.css"

export default function Main() {
    return (
        <>
            <Cursor />
            <div className="w-screen h-full ">
                <div className="max-w-screen-xl mx-auto flex gap-5 flex-wrap container mb-10">
                    <div className="flex flex-col gap-5 ml-5">
                        <div className="flex gap-5">
                            <div
                                className="card w-300 h-300 bg-transparent border-2 border-or-300 rounded-3xl"
                                style={{ "--clr": "#ecb99d" }}></div>
                            <div
                                className="card2 card w-600 h-300 bg-transparent border-2 border-or-300 rounded-3xl"
                                style={{ "--clr": "#ecb99d" }}></div>
                        </div>
                        <div className="flex gap-5">
                            <div
                                className="card2 card w-600 h-300 bg-transparent border-2 border-or-300 rounded-3xl"
                                style={{ "--clr": "#ecb99d" }}></div>
                            <div
                                className="card w-300 h-300 bg-transparent border-2 border-or-300 rounded-3xl"
                                style={{ "--clr": "#ecb99d" }}></div>
                        </div>
                    </div>
                    <div
                        className="card3 card w-300 h-616 bg-transparent border-2 border-or-300 rounded-3xl"
                        style={{ "--clr": "#ecb99d" }}></div>
                </div>
            </div>
        </>
    );
}
