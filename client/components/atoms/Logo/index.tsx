import Image from "next/image";

const Logo = () => (
  <Image src="/logo.png" priority={true} width={139} height={58} alt="logo" />
);

export { Logo };
