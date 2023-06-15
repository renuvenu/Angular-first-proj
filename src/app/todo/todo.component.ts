import { Component } from '@angular/core';


interface Todo {
  id: number,
  name: string,
  checked: boolean,
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  isEdit = false;
  title = 'todo-list';
  todoInput: string ='';
  idToEdit: number = -1;
  todoList: Array<Todo> = [
    {
      id: 1,
      name: 'Chocolate',
      checked: true
    },
    {
      id: 2,
      name: 'Milk',
      checked: false    
    },
    {
      id: 3,
      name: 'Cookie',
      checked: true
    }
  ]

  addToTodoList() {
    this.isEdit = false
    this.todoList.push(
      {
        id: this.todoList.length + 1,
        name: this.todoInput,
        checked: false
      }
    );
    this.todoInput = ''
  }

  onCheckboxChange(event: number) {
    (this.todoList.find(todo => todo.id === event) as Todo).checked = ! (this.todoList.find(todo => todo.id === event) as Todo).checked
  }

  deleteTodo(id: number) {
    this.isEdit = false
    this.todoList.forEach((value,i) => {
      if(value.id === id) {
        this.todoList.splice(i,1)
      }
    })
  }

  onEdit(id: number) {
    this.isEdit = true
    this.idToEdit = id
    this.todoInput = (this.todoList.find(todo => todo.id === id) as Todo).name
  }

  editList() {
    (this.todoList.find(todo => todo.id === this.idToEdit) as Todo).name = this.todoInput
    this.todoInput = ''
    this.isEdit = false
  }
}
