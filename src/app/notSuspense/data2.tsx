import { Code } from "@nextui-org/code";
import { fetchData } from "./useData";

export const Data2 = async () => {
  const data = await fetchData(3000);

  return (
    <Code
      size="lg"
      className="flex items-center justify-center w-75 h-52"
      color="secondary"
    >
      <div>3秒後に表示されるコンポーネント_{data}</div>
    </Code>
  );
};
