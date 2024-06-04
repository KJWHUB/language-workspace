const ayfn = async (id) => {
  if (id === 1) {
    return Promise.resolve(200);
  } else {
    return Promise.reject(500);
  }
};

const main = async () => {
  const result = await ayfn(1);
  console.log(result);
};

main();
