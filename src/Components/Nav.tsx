
import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <div className="border-b">
            <div className="flex justify-between items-center container mx-auto py-4">
                <img src={Logo} alt="Logo Image" />
                <ul className="flex gap-3 font-semibold text-gray-600">
                    <li><a className="text-pink-600" href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className="flex gap-1">
                    <button className="btn btn-outline border-none rounded-full bg-none text-gray-600">Sign In</button>
                    <button className="btn btn-secondary rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;