export class Todo {
  id: string;
  title: string;
  done: boolean;

  constructor(title: string, done: boolean) {
    this.id = Math.random().toString(36).substring(2, 15);
    this.title = title;
    this.done = done;
  }
}
