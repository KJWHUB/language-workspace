const ayfn = async (id) => {
  if (id === 1) {
    return Promise.resolve(200);
  } else {
    return Promise.reject(500);
  }
};

function ayfn2(id) {
  return new Promise((resolve, reject) => {
    if (id === 1) {
      resolve(200);
    } else {
      reject(500);
    }
  });
}

const main = async () => {
  const result = await ayfn(1);

  const result2 = await ayfn2(1);
  console.log(result);
  console.log(result2);

  try {
    const result3 = await ayfn(2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};

main();
