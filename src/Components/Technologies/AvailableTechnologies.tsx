import { useState } from "react";
import type { ITechnologies } from "../../types/Technologies";
import TechnologiesCart from "./TechnologiesCart";
import { toast } from "react-toastify";

interface IAvailableTechnologiesProps {
    technologies: ITechnologies[]
}

const AvailableTechnologies = ({ technologies }: IAvailableTechnologiesProps) => {

    const [selectedStack, setSelectedStack] = useState<ITechnologies[]>([])

    const handleAddToStack = (technology: ITechnologies) => {
        setSelectedStack((previous) => [...previous, technology])

        toast.success(`${technology.name} added to your stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleRemoveToStack = (technology: ITechnologies) => {
        const removeStack = selectedStack.filter(item => item.id !== technology.id)
        setSelectedStack(removeStack);

        toast.info(`${technology.name} removed your stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleRemoveAll = () => {
        if (selectedStack.length === 0) {
            toast.error(`Your stack is already empty!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        setSelectedStack([])
        toast.warn(`All Stack removed your stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            <div className="lg:col-span-3">

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5">

                    {
                        technologies.map((technology) => {
                            const isSelected = selectedStack.filter((item) => item.id === technology.id).length > 0;
                            return (
                                <TechnologiesCart key={technology.id} technology={technology} isSelected={isSelected} handleAddToStack={handleAddToStack}></TechnologiesCart>
                            )
                        })
                    }

                </div>

            </div>

            <div className="lg:col-span-1">

                <div className="sticky top-5 rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">

                    {/* Header */}
                    <div className="mb-5">
                        <h2 className="text-xl font-bold">
                            Your Stack
                        </h2>

                        <p className="mt-1 text-sm text-base-content/50">
                            {selectedStack.length} Technology Selected
                        </p>
                    </div>

                    {selectedStack.length === 0 ? (
                        <div className="py-8 text-center">
                            <p className="text-sm font-medium text-base-content/50">
                                Your Stack is Empty
                            </p>
                        </div>
                    ) : selectedStack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center justify-between rounded-lg border border-base-200 p-3"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-8 w-8 object-contain"
                                />

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        {technology.name}
                                    </h3>

                                    <p className="text-[10px] text-base-content/50">
                                        {technology.category}
                                    </p>
                                </div>
                            </div>

                            <button onClick={() => handleRemoveToStack(technology)} className="text-xl text-base-content/40 hover:text-error cursor-pointer">
                                ×
                            </button>
                        </div>
                    ))}


                    {/* Remove All button */}
                    <button onClick={() => handleRemoveAll()} className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 cursor-pointer">
                        Remove All
                    </button>

                </div>

            </div>

        </div>
    );
};

export default AvailableTechnologies;