import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-q-sofa',
  templateUrl: './q-sofa.component.html',
  styleUrls: ['./q-sofa.component.css']
})
export class QSofaComponent implements OnInit {
  @Output() onAnswer = new EventEmitter<boolean>();

  typesOfQSofa = [
    'Частота дыхания > 22/мин',
    'Есть нарушения сознания',
    'Систолическое артериальное давление ≤ 100 мм рт.ст.'
  ];

  constructor() { }

  setQSofa(criteriaCount: number) {
    const answer = criteriaCount >= 2;
    this.onAnswer.emit(answer);
  }

  ngOnInit() {
  }

}
