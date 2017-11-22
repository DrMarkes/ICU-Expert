import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-infection',
  templateUrl: './infection.component.html',
  styleUrls: ['./infection.component.css']
})
export class InfectionComponent implements OnInit {
  @Input() title: string;
  @Output() onAnswer = new EventEmitter<boolean>();

  constructor() { }

  setInfection(inf: boolean) {
    this.onAnswer.emit(inf);
  }
  ngOnInit() {}
}
