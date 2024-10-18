class CustomError extends Error {
  name = "CustomError";
  extraProp = "ERROR: test";
}

export async function catchError<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as Error];
  }
}

// export function catchErrorTyped<T, E extends new (message?: string) => Error>(
//   promise: Promise<T>,
//   errorsToCatch?: E[]
// ): Promise<[T | null, InstanceType<E> | null]> {
//   return promise
//     .then((data) => [data, null])
//     .catch((error) => {
//       if (error instanceof errorType) {
//         return [null, error];
//       }
//       throw error;
//     });
// }
