"use client";
import { Suspense, useRef, useEffect } from "react";
import useSwr from "swr";
import { ErrorBoundary } from "react-error-boundary";

// Set this to `true` to see the problem
const SUSPENSE_ENABLED = true;

let callcount = 0;

// This component is just to display the current call count
// without distracting reacts state
const CallcountDisplay = () => {
  const ref = useRef();

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        (ref.current as any).innerHTML = callcount;
      }
      requestAnimationFrame(update);
    };

    update();
  }, []);

  return (
    <p>
      Current callcount: <span ref={ref as any} />
    </p>
  );
};

// This is a dummy fetcher wich returns data every second call
// otherwise it throws an error to simululate a failing request
const fetcher = async () => {
  callcount += 1;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (callcount % 2) {
    throw new Error("Something went wrong");
  }

  return { name: "Hans Werner" };
};

const Greeting = () => {
  const { data } = useSwr("/users/current", fetcher, {
    suspense: SUSPENSE_ENABLED,
  });

  if (!data) {
    return "No data";
  }

  return <h2>Hello {data.name}</h2>;
};

export default function Example() {
  return (
    <div className="App">
      <h1>Retry with Suspense Demo</h1>
      <ErrorBoundary fallback={<div>Oh no</div>} onError={() => {}}>
        <Suspense fallback="loading">
          <Greeting />
        </Suspense>
      </ErrorBoundary>
      <CallcountDisplay />
    </div>
  );
}
