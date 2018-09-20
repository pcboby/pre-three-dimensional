
// Plugin
function getPlugin() {
    return document.getElementById('ArkObj');
}

$(function () {
    // getPlugin().Initialize("Y:\Data\重庆防汛管理信息化\Data\Terrains\ChongQing.arkpro");
    // 本地服务数据
    // var url = 'http://' + window.location.host + '/assets/Data/Terrains/ChongQing.arkpro';
    // 本地盘数据
    // var url ='E:\works\github\pre-three-dimensional\src\assets\Data\Terrains\ChongQing.arkpro';
    var url = "Y:/Data/重庆防汛管理信息化/Data/Terrains/ChongQing.arkpro";
    
    //getPlugin().Initialize("D:/3D/Data/Globe/Terrains/globe.arkpro");
    getPlugin().Initialize(url)
    
    // initFixedModelTree();
    // initNaviPathTree();
})

window.onbeforeunload = function(event) {
    //return confirm("确定退出或刷新吗");
    getPlugin().UnInitialize();
}


function FloodProc_Init() {
    getPlugin().FloodProc.Initialize("Y:/Project/重庆防汛管理信息化/Data/Flood/重庆潼南合川.shp");
    getPlugin().FloodProc.ColorFile = "Y:/Project/重庆防汛管理信息化/Data/Flood/color.txt";
    getPlugin().FloodProc.CurStep = 30;
}

function FloodProc_StepIt() {
    getPlugin().FloodProc.CurStep = getPlugin().FloodProc.CurStep + 5;
}

function FloodProc_ResetStep() {
    getPlugin().FloodProc.ResetStep();
}

function FloodProc_UnInit() {
    getPlugin().FloodProc.UnInitialize();
}