import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Index = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/dashboard");
  }, []);

  return <div></div>;
};

export default Index;
