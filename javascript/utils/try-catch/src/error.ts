export class CustomError extends Error {
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

/**
 * @param promise
 * @param errorsToCatch 원하는 에러 타입을 배열로 넣어주면 해당 에러만 캐치
 * @returns
 */
export async function catchErrorTyped<T, E extends new (message?: string) => Error>(
  promise: Promise<T>,
  errorsToCatch?: E[]
): Promise<[T | null, InstanceType<E> | null]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    if (errorsToCatch === undefined) {
      return [null, error as InstanceType<E>];
    }

    if (errorsToCatch.some((errorType) => error instanceof errorType)) {
      return [null, error as InstanceType<E>];
    }
    throw error;
  }
}
