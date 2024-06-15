import DefaultBtn from "@/app/components/common/Button/DefaultBtn";

export default function MainPricing() {
    return (
        <>
            <div className="w-screen h-auto mt-2">
                <div className="max-w-screen-xl flex items-center justify-center mx-auto">
                    <h2 className="text-white text-2xl font-medium my-14">
                        PRICING
                    </h2>
                </div>
                <div className="max-w-screen-xl h-auto flex items-center justify-center mx-auto gap-12">
                    <div className="w-auto h-auto bg-transparent rounded-2xl border-2 border-or-300">
                        <h2 className="text-white text-lg font-medium px-40 py-2 text-center">
                            Free
                        </h2>
                        <hr className="border-or-300" />
                        <div className="flex items-center justify-center mb-4">
                        <DefaultBtn text={"Try free"}/>
                        </div>
                    </div>
                    <div className="w-auto h-auto bg-transparent rounded-2xl border-2 border-or-300">
                        <h2 className="text-white text-lg font-medium px-40 py-2 text-center">
                            Hacker
                        </h2>
                        <hr className="border-or-300" />
                        <div className="flex items-center justify-center mb-4">
                        <DefaultBtn text={"Become an Hacker"}/>
                        </div>
                    </div>
                    <div className="w-auto h-auto bg-transparent rounded-2xl border-2 border-or-300">
                        <h2 className="text-white text-lg font-medium px-40 py-2 text-center">
                            Sensei
                        </h2>
                        <hr className="border-or-300" />
                        <div className="flex items-center justify-center mb-4">
                        <DefaultBtn text={"Become an Sensei"}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
