"use client";

import LoginNav from "../../layout/NavBar/LoginNav";
import useClientRouter from "../../../hooks/useClientRouter";

export default function SignIn() {
    const router = useClientRouter();

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = (form.elements.namedItem("Email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("pwd") as HTMLInputElement).value;

        if (!email || !password) {
            alert("Tous les champs doivent être remplis.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        if (router) {
            router.push('./RoadMapSelect');
        }
    };

    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-br to-red-200 via-transparent from-transparent flex flex-col justify-center items-center">
                <nav className="absolute top-0 w-full">
                    <LoginNav />
                </nav>
                <div className="max-w-screen-xl w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="border-2 border-or-300 w-fit rounded-2xl mx-auto p-3">
                            <h1 className="text-white text-2xl font-medium py-2 px-36 mt-2">
                                Sign In
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
                                <div className="flex items-center justify-center my-8 gap-3">
                                    <button
                                        type="submit"
                                        className="w-auto h-auto p-2 ml-2 flex items-center justify-center border-2 border-or-300 rounded-lg text-white font-medium text-sm transition duration-500 ease-out hover:bg-or-300 hover:text-slate-950">
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
