import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="p-4 w-full flex justify-between items-center text-slate-500">
      <div className="w-20">
        <img className="w-full h-full object-cover" src="https://cdn.imgbin.com/9/4/7/imgbin-photography-logo-the-photographers-gallery-design-3JUygxQxUsW8fMCGQsxViifWz.jpg" alt="logo" />
      </div>
      <nav className="flex">
        <ul className="mx-4 flex font-medium text-center">
          <li className="mx-2">
            <a href="#">About</a>
          </li>
          <li className="mx-2">
            <a href="#">Contact</a>
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