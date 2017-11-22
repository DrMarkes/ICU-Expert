import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {SofaBreath} from '../../models/sofa-breath';
import {SofaCoagulation} from '../../models/sofa-coagulation';
import {SofaCardio} from '../../models/sofa-cardio';
import {SofaLiver} from '../../models/sofa-liver';
import {SofaNeuro} from "../../models/sofa-neuro";
import {SofaRenal} from "../../models/sofa-renal";

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.css']
})
export class SofaComponent implements OnInit {
  @Output() onAnswer = new EventEmitter<boolean>();
  items = [
    { title: 'Дыхание', model: SofaBreath, score: 0 },
    { title: 'Коагуляция', model: SofaCoagulation, score: 0 },
    { title: 'Сердечно-сосудистая система', model: SofaCardio, score: 0 },
    { title: 'Печень', model: SofaLiver, score: 0 },
    { title: 'Нервная система - шкала Глазго', model: SofaNeuro, score: 0 },
    { title: 'Почки', model: SofaRenal, score: 0 }
  ];
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  setTotal(index: number, score: number) {
    this.items[index].score = score;
    this.total = 0;
    this.items.forEach(item => {
      this.total += item.score;
    });
  }
  getSofa() {
    const result = this.total >= 2;
    this.onAnswer.next(result);
  }
}
