import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private projectName = '重庆市防汛管理三维信息系统';
  private version = '1.0.0';
  constructor() { }

  ngOnInit() {
  }

}
