import {
  Directive,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appMapArk]'
})

// <object id="ArkObj" type='application/x-itst-activex' width='100%' height='100%' classid="CLSID:0BCAF84B-7570-4A96-9528-542A77E6606A">
//   <param name="_Version" value="65536">
//   <param name="_ExtentX" value="13229">
//   <param name="_ExtentY" value="13229">
//   <param name="_StockProps" value="0">
// </object>

export class MapArkDirective implements OnInit {
  constructor() {}

  ngOnInit() {}

}