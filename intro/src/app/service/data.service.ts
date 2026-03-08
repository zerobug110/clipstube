import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    return ['data1', 'data2', 'date3', 'data4'];
  }
  constructor() {}
}
