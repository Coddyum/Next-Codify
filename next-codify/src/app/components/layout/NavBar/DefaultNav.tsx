import DefaultBtn from "../../common/Button/DefaultBtn";
import Logo from "../../common/Logo/logo";

const DefaultNav = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <Logo />
                    <DefaultBtn text={"Get Started"} />
                </div>
            </div>
            <hr className="border-or-300" />
        </>
    );
};

export default DefaultNav;
