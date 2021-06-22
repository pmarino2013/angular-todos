import { Injectable } from '@angular/core';
import { Tarea } from './models/tareas.model';
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  tareas: Tarea[] = [];

  constructor() {
    this.cargarStore();
  }

  addTask(texto: string) {
    const nuevaTarea = new Tarea(texto);
    this.tareas.push(nuevaTarea);
    this.guardarStore();

    return this.tareas;
  }

  delTask(index: any) {
    this.tareas.splice(index, 1);
    this.guardarStore();
  }

  toggleDone(index: number) {
    this.tareas[index].done = !this.tareas[index].done;
    this.guardarStore();
  }

  guardarStore() {
    localStorage.setItem('data', JSON.stringify(this.tareas));
  }

  cargarStore() {
    this.tareas = JSON.parse(localStorage.getItem('data') || '[]');
  }
}
