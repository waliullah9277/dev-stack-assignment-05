
import Logo from "../assets/logo-text.png"
import Hambargar from "../assets/hamburger.png"
const Nav = () => {
    return (
        <div className="border-b">
            <div className="container mx-auto px-5 md:px-0 py-4 grid grid-cols-3 md:flex md:items-center md:justify-between">
                <button className="md:hidden"><img src={Hambargar} alt="Hambarger Menu" className="w-6 h-6" /></button>
                <img src={Logo} alt="Logo Image" className="justify-self-center md:justify-self-start" />
                <ul className="hidden md:flex gap-3 font-semibold text-gray-600">
                    <li><a className="text-pink-600" href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className="flex justify-self-end gap-1 text-xs md:text-sm">
                    <button className="btn btn-outline border-none rounded-full bg-none text-gray-600">Sign In</button>
                    <button className="btn btn-secondary rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;