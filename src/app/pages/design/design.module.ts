import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { AddpostsComponent } from './addposts/addposts.component';
import { MainComponent } from './main/main.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireserviceService } from './fireservice.service';
import { StorageBucket } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpostsModule } from './addposts/addposts.module';
import { MainModule } from './main/main.module';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [DesignComponent],
  imports: [
    CommonModule,
    DesignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AddpostsModule,
    MainModule,
    MatCardModule
  ],
  providers: [
    AngularFirestore,
    FireserviceService,
    { provide: StorageBucket, useValue: 'gs://hairforyou-2b7f8.appspot.com/' }
  ]
})
export class DesignModule {}
