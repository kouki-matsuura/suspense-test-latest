export const fetchData: (ms: number) => Promise<any> = async (ms: number) => {
  const res = await new Promise((resolve) => {
    const randomStr = Math.random().toString(36).substring(7);
    setTimeout(() => {
      resolve(randomStr);
    }, ms);
  });
  return res;
};
