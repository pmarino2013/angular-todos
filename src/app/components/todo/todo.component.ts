import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tareas.model';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private servicesService: ServicesService) {
    this.tareas = this.servicesService.tareas;
  }

  agregar(texto: any) {
    if (texto.value !== '') {
      this.tareas = this.servicesService.addTask(texto.value);
    }
    texto.value = '';
  }

  ngOnInit(): void {}
}
