import { Component, OnInit } from '@angular/core';
import { MapperService } from '../../../../../core/services';

@Component({
  selector: 'app-flood-deduction',
  templateUrl: './flood-deduction.component.html',
  styleUrls: ['./flood-deduction.component.css']
})
export class FloodDeductionComponent implements OnInit {

  constructor(private mapperService: MapperService) { }

  ngOnInit() {
  }

}
