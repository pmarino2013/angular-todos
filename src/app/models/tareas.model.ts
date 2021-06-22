export class Tarea {
  id: number;
  tarea: string;
  done: boolean;

  constructor(titulo: string) {
    this.tarea = titulo;
    this.done = false;

    this.id = new Date().getTime();
  }
}
