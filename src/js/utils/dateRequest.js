const dateRequest = () => {
  const week = 24 * 60 * 60 * 1000 * 7;
  const today = new Date();
  const sevenDaysAgo = new Date(today - week);
  const from = sevenDaysAgo.toISOString().slice(0, 10);
  const to = today.toISOString().slice(0, 10);
  return `&from=${from}&to=${to}`;
};

export default dateRequest;
