import * as v from 'valibot';

export const courseIdSchema = v.object({
  id: v.pipe(v.string(), v.nonEmpty(), v.cuid2()),
});
