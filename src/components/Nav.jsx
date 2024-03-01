import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Nike logo" width={130} height={29} />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat text-lg leading-normal text-slate-gray hover:text-coral-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/"
          className="padding-r font-montserrat text-lg leading-normal"
        >
          Sign in / Explore now
        </a>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
