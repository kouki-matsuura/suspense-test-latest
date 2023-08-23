"use client";
import { fetchData } from "@/app/notSuspense/useData";
import { Code } from "@nextui-org/code";
import useSWR, { preload } from "swr";
let count = 0;
const key = "data1";
export const fetcher = async () => {
  count++;
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3秒間待機
  return Promise.resolve({ name: "success" });
};

export const DataSWR1 = () => {
  const { data } = useSWR("data", fetcher, {
    suspense: true,
    fallbackData: { name: "fallback" },
  });
  console.log(data);

  return (
    <Code
      size="lg"
      className="flex items-center justify-center w-75 h-52"
      color="primary"
    >
      <div>3秒後に表示されるコンポーネント＿{data.name}</div>
    </Code>
  );
};
