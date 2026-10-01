import LogoImage from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div>
            <div className="border-t border-slate-200 my-8"></div>
            <div className='flex flex-col md:grid md:grid-cols-2 md:gap-20 lg:flex lg:flex-row justify-between container mx-auto px-5 md:px-0 py-10 '>
                <div className='space-y-4 md:space-y-4'>
                    <img src={LogoImage} alt="Footer Logo" />
                    <p className='w-full md:w-[400px] text-[#64748B] font-normal text-md'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className="mb-4">
                        <ul className='flex gap-3 text-[#475569] font-semibold'>
                            <li><a href="">GitHub</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Linkedin</a></li>
                        </ul>
                    </div>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-[#0F172A] font-bold'>PRODUCT</h2>
                    <ul className=' text-[#64748B] font-normal text-md space-y-1 mb-3'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-[#0F172A] font-bold'>COMPANY</h2>
                    <ul className=' text-[#64748B] font-normal text-md space-y-1 mb-3'>
                        <li><a href="">About</a></li>
                        <li><a href="">Contacts</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-[#0F172A] font-bold'>LEGAL</h2>
                    <ul className=' text-[#64748B] font-normal text-md space-y-1 mb-3'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-200 container mx-auto"></div>

            <div className='container mx-auto px-5 md:px-0 flex justify-between items-center py-6'>
                <p className="text-[#64748B] font-normal">
                    © {new Date().getFullYear()} Dev Stack. All rights reserved.
                </p>
                <ul className='flex gap-4 text-[#64748B] font-normal'>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;