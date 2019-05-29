import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  load = false;
  constructor() {}

  ngOnInit() {}

  button(){
    this.load = true;
  }
}
