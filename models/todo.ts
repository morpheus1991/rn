export type TodoItem = {
  text: string;
  isChecked: boolean;
  id: string;
  isDone: false;
};

export type TodoList = TodoItem[];
