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
    icon: 'fa fa-medium'
  }, {
    name: 'Cesium',
    code: 'cesium',
    title: 'CesiumMap',
    icon: 'fa fa-globe'
  }, {
    name: 'Ark',
    code: 'ark',
    title: 'ArkMap',
    icon: 'fa fa-google-wallet'
  }];
  constructor() {}

  getMapModes() {
    return this.mapModes;
  }

}
