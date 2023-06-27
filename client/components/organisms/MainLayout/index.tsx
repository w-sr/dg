import { Navbar } from "components/molecules/Navbar";
import type { ReactNode } from "react";

type IMainLayoutProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainLayoutProps) => (
  <div className="w-full px-1 bg-white antialiased">
    <div className="mx-auto w-full flex flex-row">
      <div className="w-80 px-16 flex flex-col items-center">
        <Navbar />
      </div>

      <main className="content p-8 text-xl bg-gray-100 flex-1 rounded-l-3xl">
        {props.children}
      </main>
    </div>
  </div>
);

export { MainLayout };
