import type { H3Event } from 'h3';
import * as v from 'valibot';

export async function validateRouterParams<T extends v.GenericSchema>(
  event: H3Event,
  schema: T,
): Promise<v.InferInput<T>> {
  const { issues, output, success } = await getValidatedRouterParams(
    event,
    v.safeParser(schema),
  );

  if (!success) {
    const errors: Record<string, string> = {};

    for (const issue of issues) {
      const field = issue.path?.join('.');

      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    }

    throw Errors.validation('Invalid router parameters', {
      error: issues,
      errors,
    });
  }

  return output;
}
