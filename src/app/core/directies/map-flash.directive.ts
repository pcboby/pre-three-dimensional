import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appMapFlash]'
})

// <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%" id="swf">
//   <param name="movie" value="/assets/flash/f.swf" />
//   <param name="wmode" value="window" />
//   <param name="allowScriptAccess" value="always" />
//   <param name="WMODE" value="transparent">
//   <embed src="/assets/flash/f.swf" width="100%" height="100%" name="swf" wmode="transparent" allowscriptaccess="always"
//     type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">
// </object>

export class MapFlashDirective implements OnInit {

  constructor() { }
  ngOnInit () {}
}
