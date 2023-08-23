import React, { Suspense } from "react";
import { Data1 } from "../../notSuspense/data1";
import { Data2 } from "../../notSuspense/data2";
import { Data3 } from "../../notSuspense/data3";
import { Spinner } from "@nextui-org/spinner";

export default function Home() {
  return (
    <>
      <div className="text-lg font-bold">Suspneseを使う例</div>
      <div className="flex flex-col gap-3">
        <Suspense fallback={<Spinner />}>
          <Data1 />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Data2 />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Data3 />
        </Suspense>
      </div>
    </>
  );
}
