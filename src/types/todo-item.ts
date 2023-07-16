import { z } from "zod";

export const todoItemSchema = z.object({
  id: z.number(),
  completed: z.boolean(),
  content: z.string().min(1),
});

export type TodoItem = z.infer<typeof todoItemSchema>;
