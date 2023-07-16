import { z } from "zod";

import { todoItemSchema, type TodoItem } from "../types/todo-item";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/local-storage";

export function getListData(): TodoItem[] {
  const data = getLocalStorageItem("list-data");

  const result = z.array(todoItemSchema).safeParse(data);

  if (!result.success) {
    console.error(result.error.message);
    return [];
  }

  return result.data;
}

export function setListData(data: TodoItem[]) {
  setLocalStorageItem("list-data", data);
}
