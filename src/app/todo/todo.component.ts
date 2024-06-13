  import { Component } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css'
  })
  export class TodoComponent {
    todoList : any =[];
    editId :any = null;
    bioSection = new FormGroup({
      todo: new FormControl<string>('', [
        Validators.required
      ]),
    });

    onSubmit() {
      if (this.bioSection.valid) {
        let date = new Date;
        let milllisec = date.getMilliseconds();
        const todoValue = this.bioSection.value.todo;
        let obj = {
          todo : todoValue,
          id : milllisec
        }
        this.todoList.push(obj)
        console.log(this.todoList)
      }
      this.bioSection.reset();

    }


    delete(id: any) {
      const index = this.todoList.findIndex((item: any) => item.id === id);
      if (index !== -1) {
        this.todoList.splice(index, 1);
      }
    }

    edit(id:any){
      let index = this.todoList.findIndex((item:any)=>item.id === id)
      if(index !== -1){
        debugger
        let obj = this.todoList[index]
        this.bioSection.controls.todo.setValue(obj.todo);
        this.editId = obj.id
      }
    }
    
    editData(){
      let index = this.todoList.findIndex((item:any)=>item.id === this.editId);
      if(index !== -1){
        let obj = this.todoList[index];
        obj.todo = this.bioSection.controls.todo.value;
        this.editId = null;
      }
      this.bioSection.reset();
    }
  }
