// Plugin
function getPlugin() {
    return document.getElementById('ArkObj');
}

$(function() {
    // var url = 'Y:/Project/重庆防汛管理信息化/Data/Terrains/ChongQing.arkpro';// OK

    var url = 'http://' + window.location.host + '/assets/Data/Terrains/ChongQing.arkpro'; // 有问题，无属性

    // var url = 'E:/works/github/pre-three-dimensional/src/assets/Data/Terrains/ChongQing.arkpro' // OK;



    getPlugin().Initialize(url);

    //getPlugin().Initialize("D:/3D/Data/Globe/Terrains/globe.arkpro");

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