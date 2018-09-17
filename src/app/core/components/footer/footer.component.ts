import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  get objectName() {
    return this.layoutService.objectName;
  }

  get objectVersion() {
    return this.layoutService.objectVersion;
  }

}
