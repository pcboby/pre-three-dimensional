

function FloodProc_Init() {//初始播放
    getPlugin().FloodProc.Initialize(ipConfigStr+"/Flood/重庆潼南合川.shp");
    getPlugin().FloodProc.ColorFile = ipConfigStr+"/Flood/color.txt";
    getPlugin().FloodProc.CurStep = 10;

    window.FloodProcInterval = window.setInterval("FloodProc_StepIt()",2000);

}

function FloodProc_Pause(){//暂停    
    clearInterval(FloodProcInterval)
}

function FloodProc_ContinuePlay(){//继续播放   
    window.FloodProcInterval = window.setInterval("FloodProc_StepIt()",2000);
}

function FloodProc_stop(){//播放停止   
    FloodProc_Pause();
    FloodProc_ResetStep();
}

function FloodProc_Close(){//菜单退出
    FloodProc_stop();
    FloodProc_UnInit();
}

function FloodProc_StepIt() {//进度刷新

    var totalStep = getPlugin().FloodProc.TotalStep;
    var currentStep = getPlugin().FloodProc.CurStep;

    if(getPlugin().FloodProc.CurStep > totalStep)  
         FloodProc_Pause();
    
    getPlugin().FloodProc.CurStep = currentStep + 4;

      //精度条传参percent
    //百分比
    var percent = currentStep/totalStep;


}

//内部函数
function FloodProc_ResetStep() {
    getPlugin().FloodProc.ResetStep();
}

function FloodProc_UnInit() {
    getPlugin().FloodProc.UnInitialize();
}

