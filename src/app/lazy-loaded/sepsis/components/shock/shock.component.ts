import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shock',
  templateUrl: './shock.component.html',
  styleUrls: ['./shock.component.css']
})
export class ShockComponent implements OnInit {
  @Output() result = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  setResult(res: boolean) {
    this.result.next(res);
  }
}
