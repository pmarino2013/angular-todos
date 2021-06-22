import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tareas.model';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  tareas: Tarea[] = [];

  estilo: string = 'hecho-true';

  constructor(private servicesService: ServicesService) {
    this.tareas = this.servicesService.tareas;
  }

  delTask(index: any) {
    this.servicesService.delTask(index);
  }

  toggleDone(index: number) {
    this.servicesService.toggleDone(index);
  }

  calcularPendiente() {
    return this.tareas.filter((tarea) => tarea.done === false).length;
  }

  ngOnInit(): void {}
}
