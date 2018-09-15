import {
  MapperService
} from './../../services/mapper.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-mapper',
  templateUrl: './mapper.component.html',
  styleUrls: ['./mapper.component.css']
})
export class MapperComponent implements OnInit {

  constructor(private mapperService: MapperService) {}

  ngOnInit() {}

  get mapMode() {
    return this.mapperService.mapMode;
  }

}
