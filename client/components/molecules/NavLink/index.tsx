import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

type INavLinkProps = {
  href: string;
  className?: string;
  icon?: ReactNode;
  title?: string;
};

const NavLink = ({ href, className, icon, title }: INavLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname.includes(href)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isActive]);

  return (
    <div className={`px-4 py-2 ${isActive ? "bg-gray-100 " : ""} rounded-2xl`}>
      <Link href={href} className={className}>
        {icon}
        {title && title}
      </Link>
    </div>
  );
};

export { NavLink };
