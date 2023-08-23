import { Spinner } from "@nextui-org/spinner";
import { Suspense } from "react";
import { DataSWR1 } from "./dataSwr1";

export default function Home() {
  return (
    <>
      <div>SWRを使う例</div>
      <div className="flex flex-col gap-3">
        <Suspense fallback={<Spinner />}>
          <DataSWR1 />
        </Suspense>
      </div>
    </>
  );
}
