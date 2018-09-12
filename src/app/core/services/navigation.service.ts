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
    icon: 'fa fa-search',
    data: [{
      id: '001',
      title: '模型管理',
      icon: 'fa fa-search'
    }, {
      id: '002',
      title: '专题管理',
      icon: 'fa fa-search'
    }, {
      id: '003',
      title: '倾斜管理',
      icon: 'fa fa-search'
    }]
  }, {
    id: '002',
    title: '漫游标注',
    icon: 'fa fa-search',
    data: [{
      id: '001',
      title: '三维漫游',
      icon: 'fa fa-search'
    }, {
      id: '002',
      title: '标注',
      icon: 'fa fa-search'
    }]
  }, {
    id: '003',
    title: '查询定位',
    icon: 'fa fa-search',
    data: [{
      id: '001',
      title: '点击查询',
      icon: 'fa fa-search'
    }, {
      id: '002',
      title: '属性查询',
      icon: 'fa fa-search'
    }]
  }, {
    id: '004',
    title: '分晰量算',
    icon: 'fa fa-search',
    data: [{
      id: '001',
      title: '距离量算',
      icon: 'fa fa-search'
    }, {
      id: '002',
      title: '面积量算',
      icon: 'fa fa-search'
    }, {
      id: '003',
      title: '高度量算',
      icon: 'fa fa-search'
    }, {
      id: '004',
      title: '剖面分析',
      icon: 'fa fa-search'
    }, {
      id: '005',
      title: '地形开挖分析',
      icon: 'fa fa-search'
    }, {
      id: '006',
      title: '缓冲区分析',
      icon: 'fa fa-search'
    }, {
      id: '007',
      title: '空间叠加分析',
      icon: 'fa fa-search'
    }, {
      id: '008',
      title: '坡反分析',
      icon: 'fa fa-search'
    }]
  }, {
    id: '005',
    title: '演进展示',
    icon: 'fa fa-search',
    data: [{
      id: '001',
      title: '洪水推演',
      icon: 'fa fa-search'
    }, {
      id: '002',
      title: '淹没分析',
      icon: 'fa fa-search'
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
