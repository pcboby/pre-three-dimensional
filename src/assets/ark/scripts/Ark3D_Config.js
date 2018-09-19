// var host = window.location.host;
// var servicesPath = 'http://' + host + '/Data';

// Plugin
function getPlugin() {
    // return document.getElementById('ArkObj');
    return document.querySelector('#ArkObj');
}

// $(function() {
//     getPlugin().Initialize(servicesPath + "Terrains/ChongQing.arkpro");

//     //getPlugin().Initialize("D:/3D/Data/Globe/Terrains/globe.arkpro");

//     // initFixedModelTree();
//     // initNaviPathTree();
// });

// window.onbeforeunload = function(event) {
//     //return confirm("确定退出或刷新吗");
//     getPlugin().UnInitialize();
// };


function FloodProc_Init() {
    getPlugin().FloodProc.Initialize(servicesPath + "/Flood/重庆潼南合川.shp");
    getPlugin().FloodProc.ColorFile = servicesPath + "/Flood/color.txt";
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