//漫游
function getNaviPathListData() {
//     console.log('@@@@@')
//     var data = [{id:'1',title:'111'}];
//    return data
  //获取树节点数据
  var zNodes = [];
  var naviPathManager = getPlugin().NaviPathManager;
  naviPathNames = JSON.parse(naviPathManager.GetItemNames());
//   alert("naviPathNames",naviPathNames)
//   return [];
//   for (var i = 0; i < naviPathManager.ItemCount; i++) {
    return naviPathNames.ItemNames;
//     zNodes.push({
//       id: i, //用于播放函数playNaviPath传入值
//       title: naviPathNames.ItemNames[i]
//     });
//     var naviPathItem = naviPathManager.GetItemByIndex(i);
//   }
//   console.log(zNodes)
//   return zNodes;
}

function playNaviPath(id) { //漫游播放 与继续播放 同一响应函数
  var naviPathPlayer = getPlugin().ArkScene.GetNavigationPathPlayer();
  naviPathPlayer.NavigationPath = getPlugin().NaviPathManager.GetItemByIndex(id).NavigationPath;
  naviPathPlayer.Play();
}


function PauseNaviPath(id) { //漫游暂停
  var naviPathPlayer = getPlugin().ArkScene.GetNavigationPathPlayer();
  naviPathPlayer.NavigationPath = getPlugin().NaviPathManager.GetItemByIndex(id).NavigationPath;
  naviPathPlayer.Pause();
}

function StopNaviPath(id) { //漫游停止
  var naviPathPlayer = getPlugin().ArkScene.GetNavigationPathPlayer();
  naviPathPlayer.NavigationPath = getPlugin().NaviPathManager.GetItemByIndex(id).NavigationPath;
  naviPathPlayer.Stop();
}
