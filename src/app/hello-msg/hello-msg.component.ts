import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-msg',
  templateUrl: './hello-msg.component.html',
  styleUrls: ['./hello-msg.component.css']
})
export class HelloMsgComponent {
  @Input() name = 'Rammghdghj'
  @Input() image:string = '';
}
