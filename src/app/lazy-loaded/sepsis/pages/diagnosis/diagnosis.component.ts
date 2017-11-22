import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  showGoodResult = false;
  showQSofa = false;
  showInfection = false;
  showSofa = false;
  showSepsis = false;
  showShock = false;

  constructor() { }

  ngOnInit() {
  }
  setResultInfection(res: boolean) {
    this.showQSofa = res;
    this.showGoodResult = !res;
    this.showInfection = false;
    this.showSofa = false;
  }
  setResultQSofa(res: boolean) {
    this.showSofa = res;
    this.showInfection = !res;
    this.showGoodResult = false;
  }
  setResultInfectionAgain(res: boolean) {
    this.showGoodResult = !res;
    this.showSofa = res;
  }
  setResultSofa(res: boolean) {
    this.showGoodResult = !res;
    this.showSepsis = res;
  }
  setShock(res: boolean) {
    this.showShock = res;
  }
}
