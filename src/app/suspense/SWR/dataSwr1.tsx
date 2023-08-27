"use client";
import { fetchData } from "@/app/notSuspense/useData";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import useSWR, { mutate, preload, useSWRConfig } from "swr";

export const fetcher = async () => {
  const randomStr = Math.random().toString(32).substring(2);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 3秒間待機
  return Promise.resolve({ name: `${randomStr}` });
};

export const DataSWR1 = () => {
  const cacheData = localStorage.getItem("data1");
  if (cacheData) {
    console.log(cacheData);
    mutate("data1", JSON.parse(cacheData), false);
  }

  const { data } = useSWR("data1", fetcher, {
    suspense: true,
    onSuccess(data) {
      localStorage.setItem("data1", JSON.stringify(data));
    },
  });

  console.log("data1", data);

  return (
    <>
      <Code
        size="lg"
        className="flex items-center justify-center w-75 h-52"
        color="primary"
      >
        <div>1秒後に表示されるコンポーネント_{data.name}</div>
      </Code>
    </>
  );
};
