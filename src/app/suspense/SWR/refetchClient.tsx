"use client";
import { Button } from "@nextui-org/button";
import { useSWRConfig } from "swr";

export const RefetchClient = () => {
  const { cache, mutate } = useSWRConfig();

  return (
    <Button
      onClick={() =>
        mutate(
          (key) => typeof key === "string" && key.startsWith("data"),
          undefined,
          { revalidate: true, populateCache: true, optimisticData: [] }
        )
      }
    >
      リフェッチ
    </Button>
  );
};
