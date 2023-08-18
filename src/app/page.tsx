import { SWRConfigProvider } from "./SWRConfig";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <>
      <SWRConfigProvider>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <Button
              color="danger"
              size="lg"
              href="/noSuspense"
              as={Link}
              style={{ marginBottom: "20px" }}
            >
              Suspenseを利用しない
            </Button>

            <Button color="primary" size="lg" href="/suspense" as={Link}>
              Suspenseを利用する
            </Button>
          </div>
        </div>
      </SWRConfigProvider>
    </>
  );
}
