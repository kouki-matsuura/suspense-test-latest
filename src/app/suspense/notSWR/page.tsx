import { Suspense, useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import Head from "next/head";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-4">
        <h1>SWRを使わない例</h1>
        <div className="text-5xl font-bold">データを取得する例</div>
      </div>
      <div className="text-center">
        <Suspense fallback={<Spinner />}>
          <h3 className="text-lg font-semibold mb-2">取得結果</h3>
          <MyComponent />
        </Suspense>
      </div>
    </div>
  );
}

let data: string | undefined;
const MyComponent: React.FC = () => {
  const data = useData1();

  return <div>Data is {data}</div>;
};

function useData1(): string {
  // dataがまだ無ければローディングを開始する
  if (data === undefined) {
    throw fetchData().then((d) => (data = d));
  }
  return data;
}

const fetchData = async () => {
  await sleep(1000);
  return `Hello , ${(Math.random() * 1000).toFixed(0)}`;
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
