import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="mx-auto p-4 max-w-7xl flex justify-between items-center text-slate-500">
      <div className="w-24 cursor-pointer">
        <Link to={"/"}>
          <img className="w-full h-full object-cover" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <nav className="flex">
        <ul className="mx-4 flex font-medium text-center">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="cursor-pointer">
          <UserCircleIcon className="w-8" />
        </div>
      </nav>
    </header>
  );
};

export default Header;