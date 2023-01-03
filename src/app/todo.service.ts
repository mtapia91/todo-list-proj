import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todoList = new BehaviorSubject<TodoItem[]>([]);
  public todoList = this._todoList.asObservable();


  constructor() { }

  //don't need this method yet, get items displayed
  addItem(item: TodoItem) : void {
    //.next appends your item to existing list
    //([...this.todoList.value, item]) translates to:
    this._todoList.next([...this._todoList.value, item]);
    // When user clicks submit, addItem method
    //should fire and append new item to todoList
  }

}

export interface TodoItem {
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  isDeleted: boolean;
}
