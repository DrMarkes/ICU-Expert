import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  showQSofa = false;
  showSofa = false;
  showSepsisQuestion = false;
  showInfectionQuestion = true;
  infQuestions = [
    'Пациент с подозрением на инфекцию',
    'Все ещё есть подозрение на инфекцию'
  ];
  infectionQuestion = this.infQuestions[0];
  showResult = false;
  results = [
    'Мониторинг клинического состояния, повторная оценка состояния по необходимости',
    'Сепсис',
    'Сепсис. Септический шок'
  ];
  result: string;

  constructor() { }

  ngOnInit() {
  }
  setResultInf(res: boolean) {
    this.result = this.results[0];
    this.showResult = !res;
    this.showSepsisQuestion = false;
    this.showSofa = res;
    if (this.infectionQuestion === this.infQuestions[0]) {
      this.showQSofa = res;
      this.showSofa = false;
    }
  }
  setResultQSofa(res: boolean) {
    if (!res) {
      this.infectionQuestion = this.infQuestions[1];
    }
    this.showSofa = res;
    this.showQSofa = false;
    this.showResult = false;
    this.showSepsisQuestion = false;
  }
  setResultSofa(res: boolean) {
    this.result = this.results[0];
    this.showResult = !res;
    this.showSepsisQuestion = res;
  }
  setShock(res: boolean) {
    this.result = res ? this.results[2] : this.results[1];
    this.showResult = true;
  }
}
