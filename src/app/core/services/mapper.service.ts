import { environment } from './../../../environments/environment';
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {
  public mapMode = 'ark'; // flash || ark || cesium
  private mapModes = [{
    name: 'Flash',
    code: 'flash',
    title: 'FlashMap',
    icon: 'fa fa-medium',
    show: !environment.production
  }, {
    name: 'Cesium',
    code: 'cesium',
    title: 'CesiumMap',
    icon: 'fa fa-globe',
    show: !environment.production
  }, {
    name: 'Ark',
    code: 'ark',
    title: 'ArkMap',
    icon: 'fa fa-google-wallet',
    show: true
  }];
  constructor() {}

  getMapModes() {
    return this.mapModes;
  }

}
