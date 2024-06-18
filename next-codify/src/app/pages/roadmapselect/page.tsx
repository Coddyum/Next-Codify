"use client";
import RoadMapCards from "@/app/components/layout/RoadMapCard/RoadMapCards";
import "../../globals.css";
import ProfileNav from "@/app/components/layout/NavBar/ProfileNav";

export default function RoadMapSelect() {
    return (
        <>
            <div className="w-screen">
                <ProfileNav />
                <div className="max-w-screen-xl mx-auto">
                    <RoadMapCards/>
                </div>
            </div>
        </>
    );
}
