export const fetchData: (ms: number) => Promise<any> = async (ms: number) => {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms + "ms");
    }, ms);
  });
  return res;
};
