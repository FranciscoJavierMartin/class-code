import * as v from 'valibot';

export const idSchema = v.object({
  id: v.pipe(v.string(), v.nonEmpty()),
});
