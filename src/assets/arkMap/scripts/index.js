$(function() {
    Initialize();
})

function Initialize() {
    getPlugin().Initialize(getUrl());
}

function UnInitialize() {
    getPlugin().UnInitialize();
}

function getServices() {
    // var url = 'E:/works/github/pre-three-dimensional/src/assets/Data'
    var url = 'http://' + window.location.host + '/assets/Data';
    return url;
}

function getUrl() {
    var url = getServices() + '/Terrains/ChongQing.arkpro';
    // var url = 'E:/works/github/pre-three-dimensional/src/assets/Data/Terrains/ChongQing.arkpro';
    return url;
}

function getPlugin() {
    return $('#ArkObj')[0];
}

/**
 * 地图操作
 */
//设置渲染方式
// mode:number  0:点 1:线 2:面
function setRenderMode(mode) {
    getPlugin().ArkScene.RenderMode = mode;
}