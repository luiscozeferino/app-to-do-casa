import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addIntemTaskList: string = "";

  public submitItemTaskList() {
    //console.log(this.addIntemTaskList);
    this.addIntemTaskList = this.addIntemTaskList.trim();
    if(this.addIntemTaskList) {
      this.emitItemTaskList.emit(this.addIntemTaskList);
      this.addIntemTaskList = "";
  }
  }


}
