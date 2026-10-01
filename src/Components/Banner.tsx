import BannerImage from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex justify-between container mx-auto items-center py-5'>
            {/* left side */}
            <div className='space-y-4'>
                <h1 className='text-5xl text-black font-bold'>Build Your Ideal <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
                <p className='text-[#475569] w-[480px]'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className='flex gap-3'>
                    <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-lg">Explore Technologies</button>
                    <button className='btn outline-btn border px-6 py-3 rounded-xl'>Learn More</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <img src={BannerImage} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;