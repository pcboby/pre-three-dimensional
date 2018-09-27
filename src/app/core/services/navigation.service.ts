import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public projectCode = 'default';

  private navmenu = {
    default: [],
    chongqing: [{
      id: 'basicData',
      title: '基础数据',
      icon: 'pIcon pIcon-001',
      data: [{
        id: 'modelManagement',
        title: '模型管理',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'themeManagement',
        title: '专题管理',
        icon: 'pIcon pIcon-001002'
      }, {
        id: 'obliqueManagement',
        title: '倾斜管理',
        icon: 'pIcon pIcon-001003'
      }, {
        id: 'renderMode',
        title: '渲染模式',
        icon: 'pIcon pIcon-001004'
      }]
    }, {
      id: 'queryLocate',
      title: '查询定位',
      icon: 'pIcon pIcon-002',
      data: [{
          id: 'clickQuery',
          title: '点击查询',
          icon: 'pIcon pIcon-002001'
        }
        // , {
        //   id: 'attributeQuery',
        //   title: '属性查询',
        //   icon: 'pIcon pIcon-002002'
        // }
      ]
    }, {
      id: 'analyzeCalculate',
      title: '分析量算',
      icon: 'pIcon pIcon-003',
      data: [{
        id: 'calculateTools',
        title: '量算工具',
        icon: 'pIcon pIcon-003001'
      }, {
        id: 'analyzeManagement',
        title: '分析工具',
        icon: 'pIcon pIcon-003002'
      }]
    }, {
      id: 'panLabel',
      title: '漫游标注',
      icon: 'pIcon pIcon-004',
      data: [{
        id: 'threeDimensionalPan',
        title: '三维漫游',
        icon: 'pIcon pIcon-004001'
      }, {
        id: 'labelPan',
        title: '标注',
        icon: 'pIcon pIcon-004002'
      }]
    }, {
      id: 'performance',
      title: '演进进展',
      icon: 'pIcon pIcon-005',
      data: [{
        id: 'floodDeduction',
        title: '洪水推演',
        icon: 'pIcon pIcon-005001'
      }, {
        id: 'submergenceAnalysis',
        title: '淹没分析',
        icon: 'pIcon pIcon-005002'
      }]
    }],
    lanzhou: [{
      id: 'layer',
      title: '图层控制',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'database',
        title: '基础图层',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'modal',
        title: '模型图层',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'line',
        title: '管线图层',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'opration',
      title: '地图操作',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'roam',
        title: '地图漫游',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'coordinate',
        title: '坐标量测',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'distance',
        title: '距离量测',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'area',
        title: '面积量测',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'route',
        title: '漫游路径',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'spot',
        title: '兴趣点标注',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'clear',
        title: '清除标注',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'location',
      title: '地图定位',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'road',
        title: '道路定位',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'place',
        title: '地名定位',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'coordinate',
        title: '坐标定位',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'query',
      title: '管线查询',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'point',
        title: '点击查询',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'diameter',
        title: '管径',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'material',
        title: '材质',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'subsidiary',
        title: '附属物',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'condition',
        title: '条件查询',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'space',
        title: '空间查询',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'statistics',
      title: '管线统计',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'class',
        title: '分类统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'subseciton',
        title: '分段统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'subsidiary',
        title: '附属物统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'length',
        title: '长度统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'bars',
        title: '条数统计',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'analysis',
      title: '综合分析',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'life',
        title: '管线寿命',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'cross',
        title: '横断面分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'detonator',
        title: '爆管分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'connected',
        title: '连通分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'reaches',
        title: '上下游追踪',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'level',
        title: '水平净距',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'vertical',
        title: '垂直净距',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'soil',
        title: '覆土深度',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'flow',
        title: '流向分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'forward',
        title: '通视分析',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'house',
      title: '房屋管理',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'information',
        title: '房屋信息',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'print',
      title: '打印出图',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'printing',
        title: '专题图打印',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'output',
        title: '专题图输出',
        icon: 'pIcon pIcon-001001'
      }]
    }]
  };

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
    return this.navmenu[this.projectCode];
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
