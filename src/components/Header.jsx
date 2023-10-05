import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-4 text-slate-500">
      <div className="w-24 cursor-pointer">
        <Link to={"/"}>
          <img
            className="h-full w-full object-cover"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      <nav className="flex">
        <ul className="mx-4 flex text-center font-medium">
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
