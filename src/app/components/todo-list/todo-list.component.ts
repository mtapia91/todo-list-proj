import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  todoItem1: TodoItem =
  {
    description: "First item",
    dueDate: new Date(),
    isCompleted: false,
    isDeleted: false
  };
  todoItem2: TodoItem =
  {
    description: "Second item",
    dueDate: new Date(),
    isCompleted: false,
    isDeleted: false
  };
  todoItem3: TodoItem =
  {
    description: "Third item",
    dueDate: new Date(),
    isCompleted: false,
    isDeleted: false
  };
  public displayTodoList = this.todoService.todoList;

  constructor (private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todoList.subscribe((TodoItem) => {});
    }
}
