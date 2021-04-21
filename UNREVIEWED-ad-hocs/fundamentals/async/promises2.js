const callApiForProduct = (productId) => {
  const randomNumber = Math.random();
  // 100-500ms
  const timeoutLength = 100 + 400 * randomNumber;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`called api for ${productId}`);
      resolve(productId);
    }, timeoutLength);
  })
}
const product = [
  1234,
  1235,
  1236,
  1237
];
Promise.all(product.map(callApiForProduct))
