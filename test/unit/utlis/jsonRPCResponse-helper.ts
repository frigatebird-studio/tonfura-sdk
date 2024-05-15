export const responseTest = (data: unknown) => {
  expect(data).toHaveProperty('jsonrpc', '2.0');
  expect(data).toHaveProperty('id', expect.any(Number));
  expect(data).toHaveProperty('result', expect.anything());
};
