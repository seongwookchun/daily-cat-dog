export const getTimestamp = () => {
  // 2021-05-04T15:13:10.768Z
  //                    ^ -5 position
  return String(new Date().toISOString())
    .slice(0, -5)
    .replace('T', '_');
};
