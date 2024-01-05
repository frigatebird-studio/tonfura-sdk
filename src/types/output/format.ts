import type {ValidationError} from 'class-validator';

export function formatError(
  error: ValidationError,
  skipTarget = false
): string[] {
  const errors = error
    .toString()
    .split('\n')
    .filter(err => !!err)
    .map(err => err.trim());

  if (skipTarget) errors.shift();

  return errors;
}
