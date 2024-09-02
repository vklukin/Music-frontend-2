export function omitEmptyProps<T extends { [P: string | number]: unknown }>(
  obj: T
): T {
  const omittedObj = {} as T;

  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null) {
      continue;
    }

    omittedObj[key] = obj[key];
  }

  return omittedObj;
}
