"use client";
import { fetchData } from "@/app/notSuspense/useData";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import useSWR, { preload, useSWRConfig } from "swr";

const key = "data";
export const fetcher = async () => {
  const randomStr = Math.random().toString(32).substring(2);
  await new Promise((resolve) => setTimeout(resolve, 5000)); // 3秒間待機
  return Promise.resolve({ name: `${randomStr}` });
};

export const DataSWR3 = () => {
  const { data } = useSWR("data", fetcher, {
    suspense: true,
  });
  console.log("data3", data);
  return (
    <>
      <Code
        size="lg"
        className="flex items-center justify-center w-75 h-52"
        color="danger"
      >
        <div>5秒後に表示されるコンポーネント＿{data.name}</div>
      </Code>
    </>
  );
};
