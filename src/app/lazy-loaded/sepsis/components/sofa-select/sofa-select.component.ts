import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {SofaItemModel} from '../../models/sofa-item.model';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-sofa-select',
  templateUrl: './sofa-select.component.html',
  styleUrls: ['./sofa-select.component.css']
})
export class SofaSelectComponent implements OnInit {
  @Input() placeholder: string;
  @Input() items: SofaItemModel[];
  @Output() selectedValue = new EventEmitter<MatSelectChange>();

  constructor() { }

  ngOnInit() {
  }

  setValue($event: MatSelectChange) {
    this.selectedValue.next($event.value);
  }
}
