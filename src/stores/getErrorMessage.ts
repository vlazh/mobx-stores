import { Throwable } from '@vzh/ts-types/fp';

export default function getErrorMessage(error: Throwable): string {
  if (typeof error === 'string') return error;
  if (Object.getOwnPropertyNames(error).includes('toString')) return error.toString();
  if (error.constructor === {}.constructor) return (error as Error).message;
  return `${error.constructor.name}: ${(error as Error).message}`;
}
