import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navmenu = [{
    id: '001',
    title: '基础数据',
    icon: 'pIcon pIcon-001',
    data: [{
      id: '001',
      title: '模型管理',
      icon: 'pIcon pIcon-001001',
    }, {
      id: '002',
      title: '专题管理',
      icon: 'pIcon pIcon-001002',
    }, {
      id: '003',
      title: '倾斜管理',
      icon: 'pIcon pIcon-001003',
    }]
  }, {
    id: '002',
    title: '漫游标注',
    icon: 'pIcon pIcon-002',
    data: [{
      id: '001',
      title: '三维漫游',
      icon: 'pIcon pIcon-002001',
    }, {
      id: '002',
      title: '标注',
      icon: 'pIcon pIcon-002002',
    }]
  }, {
    id: '003',
    title: '查询定位',
    icon: 'pIcon pIcon-003',
    data: [{
      id: '001',
      title: '点击查询',
      icon: 'pIcon pIcon-003001',
    }, {
      id: '002',
      title: '属性查询',
      icon: 'pIcon pIcon-003002',
    }]
  }, {
    id: '004',
    title: '分晰量算',
    icon: 'pIcon pIcon-004',
    data: [{
      id: '001',
      title: '距离量算',
      icon: 'pIcon pIcon-004001',
    }, {
      id: '002',
      title: '面积量算',
      icon: 'pIcon pIcon-004002',
    }, {
      id: '003',
      title: '高度量算',
      icon: 'pIcon pIcon-004003',
    }, {
      id: '004',
      title: '剖面分析',
      icon: 'pIcon pIcon-004004',
    }, {
      id: '005',
      title: '地形开挖分析',
      icon: 'pIcon pIcon-004005',
    }, {
      id: '006',
      title: '缓冲区分析',
      icon: 'pIcon pIcon-004006',
    }, {
      id: '007',
      title: '空间叠加分析',
      icon: 'pIcon pIcon-004007',
    }, {
      id: '008',
      title: '坡反分析',
      icon: 'pIcon pIcon-004008',
    }]
  }, {
    id: '005',
    title: '演进展示',
    icon: 'pIcon pIcon-005',
    data: [{
      id: '001',
      title: '洪水推演',
      icon: 'pIcon pIcon-005001',
    }, {
      id: '002',
      title: '淹没分析',
      icon: 'pIcon pIcon-005002',
    }]
  }];

  public select_nav = '001';
  public select_tool = null;



  constructor() {}

  getNav(): object {
    let tmp = {};
    this.navmenu.forEach((item) => {
      if (item.id === this.select_nav) {
        tmp = item;
      }
    });
    return tmp;
  }
  getNavs() {
    return this.navmenu;
  }
  getTools(): object {
    return this.getNav()['data'] || [];
  }


}
