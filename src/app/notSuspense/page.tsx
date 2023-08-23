import React from "react";
import { Data1 } from "./data1";
import { Data2 } from "./data2";
import { Data3 } from "./data3";

export default function Home() {
  return (
    <>
      <div className="text-lg font-bold">Suspneseを使わない例</div>
      <div className="flex flex-col gap-3">
        <Data1 />
        <Data2 />
        <Data3 />
      </div>
    </>
  );
}
