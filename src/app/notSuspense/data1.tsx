import { Code } from "@nextui-org/code";
import { fetchData } from "./useData";

export const Data1 = async () => {
  const data = await fetchData(1000);

  return (
    <Code
      size="lg"
      className="flex items-center justify-center w-75 h-52"
      color="primary"
    >
      <div>1秒後に表示されるコンポーネント</div>
    </Code>
  );
};
