import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a Todo app', completed: true },
    { id: 3, title: 'Deploy the app', completed: false }
  ];
  newTodoTitle: string = '';
  todoId: number = 4; // Assign a unique ID to new todos

  addTodo(): void {
    if (this.newTodoTitle.trim() !== '') {
      const newTodo: Todo = {
        id: this.todoId++,
        title: this.newTodoTitle,
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
    }
  }

  toggleTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
