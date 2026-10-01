import type { ITechnologies } from "../../types/Technologies";

interface ITechnologyCartProps {
    technology: ITechnologies;
    isSelected: boolean
    handleAddToStack: (technology: ITechnologies) => void
}

const TechnologiesCart = ({ technology, isSelected, handleAddToStack }: ITechnologyCartProps) => {
    return (
        <div className={`w-full rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${isSelected ? "border-red-300" : ""}`}>

            {/* Top Section */}
            <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                    />
                </div>

                <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
                    {technology.badge}
                </span>
            </div>

            {/* Technology Info */}
            <div className="mt-5">
                <h2 className="text-lg font-semibold text-base-content">
                    {technology.name}
                </h2>

                <p className="mt-2 min-h-[60px] text-sm leading-5 text-base-content/60">
                    {technology.description}
                </p>
            </div>

            {/* Category / Difficulty / Rating */}
            <div className="mt-4 flex items-center justify-between gap-2 border-t border-base-200 pt-3">

                <span className="rounded-md bg-base-200/70 px-2 py-1 text-xs font-medium text-base-content/70">
                    {technology.category}
                </span>

                <span className="text-xs text-base-content/70">
                    {technology.difficulty}
                </span>

                <span className="flex items-center gap-1 text-xs font-semibold">
                    <span className="text-amber-400">★</span>
                    {technology.rating}
                </span>

            </div>

            {/* Add To Stack button */}
            <button
                onClick={() => handleAddToStack(technology)}
                className={`
          mt-4
          w-full
          rounded-lg
          border-none
          bg-[#0B0F1A]
          py-2.5
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          cursor-pointer
          ${isSelected
                        ? "bg-green-300 text-white"
                        : ""
                    }
        `}
                disabled={isSelected}
            >
                {isSelected ? "✓ Selected" : "Add to Stack"}
            </button>

        </div>
    );
};

export default TechnologiesCart;