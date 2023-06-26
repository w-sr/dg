import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "components/Logo";
import { NavLink } from "components/NavLink";
import type { ReactNode } from "react";
import Link from "next/link";
import { Avatar } from "components/Avatar";

type IMainLayoutProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainLayoutProps) => (
  <div className="w-full px-1 bg-white antialiased">
    <div className="mx-auto w-full flex flex-row">
      <div className="w-80 px-16 flex flex-col items-center">
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
      </div>

      <main className="content p-8 text-xl bg-gray-100 flex-1 rounded-l-3xl">
        {props.children}
      </main>
    </div>
  </div>
);

export { MainLayout };
