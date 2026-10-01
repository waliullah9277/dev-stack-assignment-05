import { use } from "react";
import type { ITechnologies } from "../../types/Technologies";
import AvailableTechnologies from "./AvailableTechnologies";

interface ITechnologiesProps{
    technologiesPromise: Promise<ITechnologies[]>
}

const Technologies = ({technologiesPromise} : ITechnologiesProps) => {
    const technologies = use(technologiesPromise)
    return (
        <div className="container mx-auto py-5">
            <div className="space-y-2 mb-8">
                <h2 className="text-4xl font-black text-black">Explore the <span className="text-pink-600">Technologies</span></h2>
                <p className="text-gray-600 ">Pick one technology per category to build your ideal stack.</p>
            </div>

            <AvailableTechnologies technologies={technologies}></AvailableTechnologies>
        </div>
    );
};

export default Technologies;