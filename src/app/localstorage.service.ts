import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getData() {
    const data = localStorage.getItem('todo');
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } 

  addData(data:any): void {
    localStorage.setItem('todo', JSON.stringify(data));
  }


}
