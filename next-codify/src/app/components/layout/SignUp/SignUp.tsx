"use client";

import LoginNav from "../../layout/NavBar/LoginNav";
import Link from "next/link";
import DefaultBtn from "../../common/Button/DefaultBtn";
import useClientRouter from "../../../hooks/useClientRouter";

export default function SignUp() {
    const router = useClientRouter();

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string): boolean => {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = (form.elements.namedItem("Email") as HTMLInputElement)
            .value;
        const pseudo = (form.elements.namedItem("Pseudo") as HTMLInputElement)
            .value;
        const password = (form.elements.namedItem("pwd") as HTMLInputElement)
            .value;
        const confirmPassword = (
            form.elements.namedItem("confirmPwd") as HTMLInputElement
        ).value;

        if (!email || !pseudo || !password || !confirmPassword) {
            alert("Tous les champs doivent être remplis.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        if (!validatePassword(password)) {
            alert(
                "Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial."
            );
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        if (router) {
            router.push("./RoadMapSelect");
        }
    };

    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-br to-red-200/70 via-transparent from-transparent flex flex-col justify-center items-center">
                <nav className="absolute top-0 w-full">
                    <LoginNav />
                </nav>
                <div className="max-w-screen-xl w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="border-2 border-or-300 w-fit rounded-2xl mx-auto px-3">
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
                                        className="w-auto h-auto p-2 ml-2 flex items-center justify-center border-2 border-or-300 rounded-lg text-white font-medium text-sm transition duration-500 ease-out hover:bg-or-300 hover:text-slate-950">
                                        Sign Up
                                    </button>
                                    <Link href="/pages/signin">
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
