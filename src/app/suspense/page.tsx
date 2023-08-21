import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <>
      <div>Suspneseを使う例</div>
      <Button color="secondary" size="lg" href="suspense/notSWR" as={Link}>
        SWRなし
      </Button>
      <Button color="default" size="lg" href="suspense/SWR" as={Link}>
        SWRあり
      </Button>
    </>
  );
}
