"use client";

import Link from "next/link";
import LoginNav from "../home/NavBar/LoginNav";
import DefaultBtn from "../../common/Button/DefaultBtn";

export default function SignUp() {
    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-br to-red-200/70 via-transparent from-transparent ">
                <nav>
                    <LoginNav />
                </nav>
                <div className="max-w-screen-xl h-auto mx-auto top-2/4 translate-y-2/4">
                    <div className="border-2 border-or-300 w-fit rounded-2xl mx-auto">
                        <h1 className="text-white text-xl font-medium py-2 px-36 mt-2">
                            Sign Up
                        </h1>
                        <div className="mt-10">
                            <label htmlFor="Email">
                                <input
                                    className="flex p-1 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    required
                                    placeholder="Email"
                                />
                            </label>
                            <label htmlFor="Pseudo">
                                <input
                                    className="flex p-1 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                    type="text"
                                    name="Email"
                                    id="Pseudo"
                                    required
                                    placeholder="Pseudo"
                                />
                            </label>
                            <label htmlFor="pwd">
                                <input
                                    className="flex p-1 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                    type="password"
                                    name="Email"
                                    id="pwd"
                                    required
                                    placeholder="Password"
                                />
                            </label>
                            <label htmlFor="pwd">
                                <input
                                    className="flex p-1 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                    type="password"
                                    name="Email"
                                    id="pwd"
                                    required
                                    placeholder="Confirm Password"
                                />
                            </label>
                            <div className="flex items-center justify-center my-8 gap-3">
                                <Link href="./RoadMapSelect">
                                    <DefaultBtn text={"Sign Up"} />
                                </Link>
                                <Link href="./Sign In">
                                    <DefaultBtn text={"Sign In"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
