import profilImage from "../../../../../public/data/userPicture.json";
import Logo from "@/app/components/common/Logo/logo";
import Link from "next/link";

const ProfileNav = () => {
    const profilImages = profilImage.map(({ profilImage, id }) => (
        <img
            key={id}
            src={profilImage}
            alt=""
            className="w-11 h-11 rounded-full border-2 border-or-300"
        />
    ));

    return (
        <>
            <nav className="max-w-screen-xl h-16 flex items-center mx-auto font-jet font-medium px-8">
                <div className="flex flex-row mr-auto items-center">
                    <Link href="/" className="flex flex-row items-center">
                        <Logo />
                    </Link>
                </div>
                {profilImages}
            </nav>
        </>
    );
};

export default ProfileNav;
