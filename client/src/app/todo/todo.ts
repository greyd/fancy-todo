export class Todo {
  id: number;
  name: string;
  done: boolean;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.done = false;
  }
}
