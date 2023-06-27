import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "components/atoms/Avatar";
import { Logo } from "components/atoms/Logo";
import { NavLink } from "components/molecules/NavLink";
import Link from "next/link";

const Navbar = () => (
  <>
    <Link href="/">
      <Logo />
    </Link>
    <Avatar name="Jonathan Roy" job="CEO" />
    <nav className="w-full">
      <ul className="flex flex-col flex-wrap text-md">
        <li>
          <NavLink
            href="/dashboard"
            className="border-none text-gray-700 hover:text-gray-900 flex items-center"
            icon={<FontAwesomeIcon icon={faHouse} className="mr-4" />}
            title="Dashboard"
          />
        </li>
      </ul>
    </nav>
  </>
);

export { Navbar };
