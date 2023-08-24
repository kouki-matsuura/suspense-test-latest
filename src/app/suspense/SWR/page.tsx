import { Spinner } from "@nextui-org/spinner";
import { Suspense } from "react";
import { DataSWR1 } from "./dataSwr1";
import { DataSWR2 } from "./dataSwr2";
import { DataSWR3 } from "./dataSwr3";
import { Button } from "@nextui-org/button";
import { RefetchClient } from "./refetchClient";

export default function Home() {
  return (
    <>
      <div>SWRを使う例</div>

      <div className="flex flex-col gap-3">
        <Suspense fallback={<Spinner />}>
          <DataSWR1 />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <DataSWR2 />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <DataSWR3 />
        </Suspense>
      </div>
      <RefetchClient />
    </>
  );
}
