import { z } from "zod";

export const audioListItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  duration: z.number()
});

export type AudioListItem = z.infer<typeof audioListItemSchema>;
