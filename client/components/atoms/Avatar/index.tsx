import { ReactNode } from "react";
import Image from "next/image";

type IAvatarProps = {
  name?: string;
  job?: ReactNode;
};

const Avatar = ({ name, job }: IAvatarProps) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 relative border-none bg-brown rounded-full mb-2">
      <Image
        src="/man.png"
        className="rounded-full"
        priority={true}
        fill
        alt="man"
      />
    </div>
    {name && <div className="text-md font-bold mb-1">{name}</div>}
    {job && <div className="text-xs text-gray-400">{job}</div>}
  </div>
);

export { Avatar };
