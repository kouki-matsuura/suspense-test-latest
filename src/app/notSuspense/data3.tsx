import { fetchData } from "./useData";
import { Code } from "@nextui-org/code";

export const Data3 = async () => {
  const data = await fetchData(5000);

  return (
    <Code
      size="lg"
      color="danger"
      className="flex items-center justify-center w-75 h-52"
    >
      <span>5秒後に表示されるコンポーネント</span>
    </Code>
  );
};
