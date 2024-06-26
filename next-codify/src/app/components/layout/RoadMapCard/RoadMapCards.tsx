import { useState } from "react";

import CardData from "../../../../../public/data/RoadMapCard.json";
import EnRollBtn from "../../common/Button/EnRollBtn";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

export default function RoadMapCards() {
    const [favorites, setFavorites] = useState(() => {
        
    });

    return (
        <>
            <div className="max-w-screen-xl flex items-center justify-center gap-8 mt-24">
                {CardData.map((data) => (
                    <div
                        key={data.id}
                        title="container"
                        className="w-72 h-auto rounded-2xl bg-slate-800 text-white font-jet">
                        <img
                            src={data.image}
                            alt=""
                            className="w-64 h-40 object-cover mx-auto mt-4 rounded-xl"
                        />
                        <div className="w-64  mt-3 text-lg flex items-center mx-auto">
                            <h2 className="text-white font-medium">
                                {data.title}
                            </h2>
                            <HeartOutlineIcon className="size-6 text-or-300 ml-auto" />
                        </div>
                        <div className="w-64 mx-auto ">
                            <h2 className="text-or-300 font-medium mt-10">
                                By:{" "}
                                <span className="text-white text-lg">
                                    {data.by}
                                </span>
                            </h2>
                        </div>
                        <div className="my-3">
                            <EnRollBtn />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
