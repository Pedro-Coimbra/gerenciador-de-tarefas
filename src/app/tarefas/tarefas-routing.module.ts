import { Routes } from "@angular/router";

import { ListarTarefaComponent } from './listar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefa/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
]