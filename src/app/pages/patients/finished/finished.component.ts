import { Component, OnInit } from '@angular/core';
import { Finished } from './finished.model';
import { FinishedService } from './finished.service';
import { MatDialog } from '@angular/material';
import { ProfileService } from '../profile/profile.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'ngx-finished',
  styles: [],
  template: `
    <ng2-smart-table
      [settings]="settings"
      (userRowSelect)="onCustomAction($event)"
      [source]="list"
    ></ng2-smart-table>
  `
})
export class FinishedComponent implements OnInit {
  list: Finished[] = [];
  isPopupOpened = true;

  constructor(
    private service: FinishedService,
    private dialog?: MatDialog,
    private _profileService?: ProfileService
  ) {}

  ngOnInit() {
    this.service.getPatients().subscribe(actionArray => {
      let patients_data = actionArray.payload.get('data');
      if (patients_data) {
        this.list = patients_data;
        this.list = this.list.filter(obj => obj.level !== 'not-selected');
        this.list = this.list.filter(obj => obj.level !== 'delivered');
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
      nic: {
        title: 'NIC',
        editable: false
      },
      email: {
        title: 'Email'
      },

      haircolor: {
        title: 'Hair Color'
      },
      measurements: {
        title: 'Measurements'
      },
      hairstyle: {
        title: 'Hair Style'
      },
      level: {
        title: 'Level'
      }
    }
  };

  onCustomAction(event) {
    this.isPopupOpened = true;
    this.service.setDialog(event.data);
    const dialogRef = this.dialog.open(ProfileComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
}
