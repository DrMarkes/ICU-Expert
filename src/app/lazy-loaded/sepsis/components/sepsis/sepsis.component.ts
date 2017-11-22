import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sepsis',
  templateUrl: './sepsis.component.html',
  styleUrls: ['./sepsis.component.css']
})
export class SepsisComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
