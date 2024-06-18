import CardData from "../../../../../public/data/RoadMapCard.json";

export default function RoadMapCards() {
    return (
        <div className="max-w-screen-xl bg-red-400 flex items-center justify-center gap-8">
            {CardData.map((data) => (
                <div
                    key={data.id}
                    title="container"
                    className="w-64 h-80 rounded-2xl bg-slate-800 text-white font-jet">
                    <img
                        src={data.image}
                        alt=""
                        className="w-56 h-36 object-cover mx-auto mt-4 rounded-xl"
                    />
                </div>
            ))}
        </div>
    );
}
