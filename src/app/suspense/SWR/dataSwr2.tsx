"use client";
import { fetchData } from "@/app/notSuspense/useData";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import useSWR, { preload, useSWRConfig } from "swr";

export const fetcher = async () => {
  const randomStr = Math.random().toString(32).substring(2);
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3秒間待機
  return Promise.resolve({ name: `${randomStr}` });
};

export const DataSWR2 = () => {
  const { data } = useSWR("data", fetcher, {
    suspense: true,
  });
  console.log("data2", data);
  return (
    <>
      <Code
        size="lg"
        className="flex items-center justify-center w-75 h-52"
        color="secondary"
      >
        <div>3秒後に表示されるコンポーネント＿{data.name}</div>
      </Code>
    </>
  );
};
