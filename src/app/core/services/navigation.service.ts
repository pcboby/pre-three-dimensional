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
        id: 'layer-base',
        title: '基础图层',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'layer-model',
        title: '模型图层',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'layer-pipeline',
        title: '管线图层',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'opration',
      title: '地图操作',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'map-roaming',
        title: '地图漫游',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'coordinate-measurement',
        title: '坐标量测',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'distance-measurement',
        title: '距离量测',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'area-measurement',
        title: '面积量测',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'roaming-path',
        title: '漫游路径',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'tagging-point',
        title: '兴趣点标注',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'tagging-clear',
        title: '清除标注',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'location',
      title: '地图定位',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'location-road',
        title: '道路定位',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'location-place',
        title: '地名定位',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'location-coordinate',
        title: '坐标定位',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'query',
      title: '管线查询',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'query-click',
        title: '点击查询',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'query-pipe',
        title: '管径',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'query-material',
        title: '材质',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'query-appendages',
        title: '附属物',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'query-conditional',
        title: '条件查询',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'query-spatial',
        title: '空间查询',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'statistics',
      title: '管线统计',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'statistics-class',
        title: '分类统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'statistics-piecewise',
        title: '分段统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'statistics-appendage',
        title: '附属物统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'statistics-length',
        title: '长度统计',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'statistics-count',
        title: '条数统计',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'analysis',
      title: '综合分析',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'analysis-pipeline',
        title: '管线寿命',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-cross',
        title: '横断面分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-tube',
        title: '爆管分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-connectivity',
        title: '连通分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-tracing',
        title: '上下游追踪',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-horizontal',
        title: '水平净距',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-vertical',
        title: '垂直净距',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-depth',
        title: '覆土深度',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-flow',
        title: '流向分析',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'analysis-visibility',
        title: '通视分析',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'housing',
      title: '房屋管理',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'information',
        title: '房屋信息',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'thematic',
      title: '打印出图',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'thematic-printing',
        title: '专题图打印',
        icon: 'pIcon pIcon-001001'
      }, {
        id: 'thematic-output',
        title: '专题图输出',
        icon: 'pIcon pIcon-001001'
      }]
    }, {
      id: 'system',
      title: '系统管理',
      icon: 'pIcon pIcon-001001',
      data: [{
        id: 'system-org',
        title: '机构管理',
        icon: 'pIcon pIcon-001001',
        sideWidth: '100%'
      }, {
        id: 'system-log',
        title: '日志管理',
        icon: 'pIcon pIcon-001001',
        sideWidth: '100%'
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
