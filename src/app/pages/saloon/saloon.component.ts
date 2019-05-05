import { Component, OnInit } from '@angular/core';
import { Saloon } from './saloon.model';
import { SaloonService } from './saloon.service';

@Component({
  selector: 'ngx-saloon',
  styles: [],
  template: `
    <ng2-smart-table [settings]="settings" [source]="list"></ng2-smart-table>
  `
})
export class SaloonComponent implements OnInit {
  list: Saloon[] = [];

  constructor(private service: SaloonService) {}

  ngOnInit() {
    this.service.getSaloon().subscribe(arr => {
      let sal = arr.payload.get('saloon_list');
      if (sal) {
        this.list = sal;
      }
    });
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      shopname: {
        title: 'Saloon Name'
      },
      contactnumber: {
        title: 'Contact Number'
      },
      address: {
        title: 'Address'
      },
      email: {
        title: 'Email'
      },
      stock: {
        title: 'Stock(Kg)',
        sort: true
      }
    }
  };
}
