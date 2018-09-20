import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navmenu = [{
    id: 'basicData',
    title: '基础数据',
    icon: 'pIcon pIcon-001',
    data: [{
      id: 'modelManagement',
      title: '模型管理',
      icon: 'pIcon pIcon-001'
    }, {
      id: 'themeManagement',
      title: '专题管理',
      icon: 'pIcon pIcon-001'
    }, {
      id: 'obliqueManagement',
      title: '倾斜管理',
      icon: 'pIcon pIcon-001'
    }, {
      id: 'renderMode',
      title: '渲染模式',
      icon: 'pIcon pIcon-001'
    }]
  }, {
    id: 'queryLocate',
    title: '查询定位',
    icon: 'pIcon pIcon-003',
    data: [{
      id: 'clickQuery',
      title: '点击查询',
      icon: 'pIcon pIcon-002'
    }, {
      id: 'attributeQuery',
      title: '属性查询',
      icon: 'pIcon pIcon-002'
    }]
  }, {
    id: 'analyzeCalculate',
    title: '分析量算',
    icon: 'pIcon pIcon-004',
    data: [{
      id: 'calculateTools',
      title: '量算工具',
      icon: 'pIcon pIcon-003'
    }, {
      id: 'analyzeManagement',
      title: '分析管理',
      icon: 'pIcon pIcon-003'
    }]
  }, {
    id: 'panLabel',
    title: '漫游标注',
    icon: 'pIcon pIcon-002',
    data: [{
      id: 'threeDimensionalPan',
      title: '三维漫游',
      icon: 'pIcon pIcon-004'
    }, {
      id: 'labelPan',
      title: '标注',
      icon: 'pIcon pIcon-004'
    }]
  }, {
    id: 'performance',
    title: '演进进展',
    icon: 'pIcon pIcon-005',
    data: [{
      id: 'floodDeduction',
      title: '洪水推演',
      icon: 'pIcon pIcon-005'
    }, {
      id: 'submergenceAnalysis',
      title: '淹没分析',
      icon: 'pIcon pIcon-005'
    }]
  }];

  public select_nav = 'basicData';
  public select_tool = null;



  constructor() {}

  getNav(): object {
    let tmp = {};
    this.getNavs().forEach((item) => {
      if (item.id === this.select_nav) {
        tmp = item;
      }
    });
    return tmp;
  }
  getNavs() {
    return this.navmenu;
  }
  getTool(): object {
    let tmp = {};
    this.getTools().forEach((item) => {
      if (item.id === this.select_tool) {
        tmp = item;
      }
    });
    return tmp;
  }
  getTools() {
    return this.getNav()['data'] || [];
  }


}
