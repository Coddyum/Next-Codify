"use client";

import LoginNav from "../home/NavBar/LoginNav";
import Link from "next/link";
import DefaultBtn from "../../common/Button/DefaultBtn";
import useClientRouter from "../../../hooks/useClientRouter";

export default function SignUp() {
    const router = useClientRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.Email.value;
        const pseudo = form.Pseudo.value;
        const password = form.pwd.value;
        const confirmPassword = form.confirmPwd.value;

        if (!email || !pseudo || !password || !confirmPassword) {
            alert("Tous les champs doivent être remplis.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        if (router) {
            router.push('./RoadMapSelect');
        }
    };

    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-br to-red-200/70 via-transparent from-transparent">
                <nav>
                    <LoginNav />
                </nav>
                <div className="max-w-screen-xl h-auto mx-auto top-2/4 translate-y-2/4">
                    <form onSubmit={handleSubmit}>
                        <div className="border-2 border-or-300 w-fit rounded-2xl mx-auto p-3">
                            <h1 className="text-white text-2xl font-medium py-2 px-36 mt-2">
                                Sign Up
                            </h1>
                            <div className="mt-10">
                                <label htmlFor="Email">
                                    <input
                                        className="flex py-2 px-20 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                        type="email"
                                        name="Email"
                                        id="Email"
                                        required
                                        placeholder="Email"
                                    />
                                </label>
                                <label htmlFor="Pseudo">
                                    <input
                                        className="flex py-2 px-20 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                        type="text"
                                        name="Pseudo"
                                        id="Pseudo"
                                        required
                                        placeholder="Pseudo"
                                    />
                                </label>
                                <label htmlFor="pwd">
                                    <input
                                        className="flex py-2 px-20 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                        type="password"
                                        name="pwd"
                                        id="pwd"
                                        required
                                        placeholder="Password"
                                    />
                                </label>
                                <label htmlFor="confirmPwd">
                                    <input
                                        className="flex py-2 px-20 mb-4 border-2 border-or-300 rounded-xl bg-transparent mx-auto text-center text-white"
                                        type="password"
                                        name="confirmPwd"
                                        id="confirmPwd"
                                        required
                                        placeholder="Confirm Password"
                                    />
                                </label>
                                <div className="flex items-center justify-center my-8 gap-3">
                                    <button
                                        type="submit"
                                        className="w-auto h-auto p-2 ml-2 flex items-center justify-center border-2 border-or-300 rounded-lg text-white font-medium text-sm transition duration-500 ease-out hover:bg-or-300 hover:text-slate-950"
                                    >
                                        Sign Up
                                    </button>
                                    <Link href="./SignIn">
                                        <DefaultBtn text={"Sign In"} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
