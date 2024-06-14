import DefaultBtn from "../../common/Button/DefaultBtn";
import Logo from "../../common/Logo/logo";

const DefaultNav = () => {
    return(
        <>
            <div className="max-w-screen-xl h-16 bg-transparent mx-auto flex items-center justify-center">
                <Logo/>
                <DefaultBtn text={"Get Stated"}/>
            </div>
        </>
    )
}

export default DefaultNav;