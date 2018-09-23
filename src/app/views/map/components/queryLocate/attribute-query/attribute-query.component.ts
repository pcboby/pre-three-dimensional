import { Component, OnInit } from '@angular/core';
import { MapperService } from '../../../../../core/services';

@Component({
  selector: 'app-attribute-query',
  templateUrl: './attribute-query.component.html',
  styleUrls: ['./attribute-query.component.css']
})
export class AttributeQueryComponent implements OnInit {

  constructor(private mapperService: MapperService) { }

  ngOnInit() {
  }

}
