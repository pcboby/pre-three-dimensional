import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-c004001',
  templateUrl: './c004001.component.html',
  styleUrls: ['./c004001.component.css']
})
export class C004001Component implements OnInit {
  data = [{
    id: '1',
    title: 'a'
  }, {
    id: '2',
    title: 'aa'
  }, {
    id: '3',
    title: 'aaa'
  }, {
    id: '4',
    title: 'aaaa'
  }, {
    id: '5',
    title: 'aaaaa'
  }];
  constructor() {}

  ngOnInit() {}

}
