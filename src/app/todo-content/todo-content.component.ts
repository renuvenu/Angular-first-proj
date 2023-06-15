import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Todo {
  id: number,
  name: string,
  checked: boolean,
}


@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css']
})
export class TodoContentComponent {
  @Input() todo:Todo = {
    id: 0,
    name: '',
    checked: false
  }

  @Output() id: EventEmitter<any> = new EventEmitter();
  @Output() idToDelete: EventEmitter<any> = new EventEmitter();
  @Output() idToEdit: EventEmitter<any> = new EventEmitter();

  onChecked(id: number) {
    this.id.emit(id)
  }

  onDelete(id: number) {
    this.idToDelete.emit(id)
  }

  onEdit(id: number) {
    this.idToEdit.emit(id)
  }

}
