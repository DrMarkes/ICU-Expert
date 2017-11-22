import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  showInit = true;
  showGoodResult = false;
  showQSofa = false;
  showInfection = false;
  showSofa = false;
  showSepsis = false;
  showShock = false;
  showSepsisQuestion = false;

  constructor() { }

  ngOnInit() {
  }
  setResultInfection(res: boolean) {
    this.showQSofa = res;
    this.showGoodResult = !res;
    this.showInfection = false;
    this.showSofa = false;
    this.showSepsis = false;
    this.showShock = false;
    this.showSepsisQuestion = false;
  }
  setResultQSofa(res: boolean) {
    this.showSofa = res;
    this.showInfection = !res;
    this.showInit = false;
    this.showSepsis = false;
    this.showShock = false;
    this.showQSofa = false;
    this.showSepsisQuestion = false;
  }
  setResultInfectionAgain(res: boolean) {
    this.showGoodResult = !res;
    this.showSofa = res;
    this.showSepsis = false;
    this.showShock = false;
    this.showSepsisQuestion = false;
  }
  setResultSofa(res: boolean) {
    this.showGoodResult = !res;
    this.showSepsisQuestion = res;
    this.showShock = false;
    this.showSepsis = false;
  }
  setShock(res: boolean) {
    this.showShock = res;
    this.showSepsis = !res;
  }
}
