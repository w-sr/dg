import { useRouter } from "next/router";

import { MainLayout } from "components/organisms/MainLayout";

const Index = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <div></div>
    </MainLayout>
  );
};

export default Index;
