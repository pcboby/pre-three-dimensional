
 window.ipConfigStr = "http://localhost:8092/Data";

 
function River()
{//点击响应函数
    var inRiver = ipConfigStr+"/water/output.json";
    var height;
    
    var as =  $.getJSON(ipConfigStr+"/water/coordinate.json",function(data){
        window.Coordinate2D = data.coordinate2D.split(";");
        var as =  $.getJSON(inRiver,function(data){
            var levelMap = readRiverJson(data);
            console.log(Coordinate2D)
            initWater(levelMap[0].LevelArray, Coordinate2D);
        });
    });

}

function updateWater()
{
    window.Currentstep ++;
    var coordArray = reCaculateCoordinate3D(Coordinate2D,currentHeigihtList[Currentstep]);

    waterFeatureDetail.Coordinates = coordArray;
    waterFeatureDetail.Updata();
    if(Currentstep>Coordinate2D.length-1)
    {
        clearInterval(waterInterval)
        // alert("推演结束")
        window.Currentstep = 0;

    }

    //精度条传参percent
    //百分比
    var percent = Currentstep/Coordinate2D.length;
}

//暂停
function PausePlay()
{
    clearInterval(waterInterval)
}

function continuePlay()
{
    //继续播放    
    window.waterInterval = window.setInterval("updateWater()",3000);
}

function stopPlay()
{
    clearInterval(waterInterval)
    window.Currentstep = 0;
}

function readRiverJson(data)
{
    var strBeginTime = data.BeginTime;	
    var strStep = data.Step;
    var strEndTime = data.EndTime;	
    var levelMap = [];

    var BeginTime = strBeginTime.split(" ");
    var stepInt = parseInt(strStep);
    var nTimeInterval = stepInt*60;
    var sectionList = data.sectionList;
    for(var i=0; i<sectionList.length; i++)
    {
        var currentSection = sectionList[i];
        var secId = currentSection.no;
        var secLevelstr = currentSection.levelSeries;

        var secLevelArray = secLevelstr.split(";");
        console.log(i, secLevelArray);       
        levelMap.push({
           id: secId,
           LevelArray: secLevelArray
       });
    } 
    return levelMap;   
}

function initWater(data, Coordinate2D)
{
    var tempInstance = getPlugin().ArkScene.CreateInstance("AreaTool_Inst");
    window.waterFeatureDetail = getPlugin().ArkScene.CreateDetail(0);

    waterFeatureDetail.PointVisible = false;
    waterFeatureDetail.LineVisible = false;
    waterFeatureDetail.AreaVisible = true;
    //waterFeatureDetail.FillColor = 0;//(uint)System.Drawing.Color.FromArgb(192, 128, 128, 255).ToArgb();
    waterFeatureDetail.ClampMode = 0;//arkATLLib.ClampModeCode.Clamp_To_Terrain=1;
    waterFeatureDetail.ClampTechnique = 0;//arkATLLib.ClampTechniqueCode.Technique_Scene=1;

    // var strJson = "{\"Finish\":true,\"Count\":5,\"Coordinate\":[101.5627995739,42.8726173937,2258.5634081271,111.2000180691,42.7640099053,3924.0806739870,109.4945963171,41.3215041775,2255.8483089022,106.7292391217,41.5346387454,1392.2000128869,106.7292391217,41.5346387454,1392.2000128869]}"
    // window. = JSON.parse(strJson);
    window.currentHeigihtList = data;
    var coordArray = reCaculateCoordinate3D(Coordinate2D,data[0]);//= getPlugin().ArkScene.Json2Vec3Array(strJson);
	waterFeatureDetail.LineColor =parseInt('ff1c0ac0',16);
	waterFeatureDetail.FillColor = parseInt('670a6ec0',16);

    waterFeatureDetail.Coordinates = coordArray;
    waterFeatureDetail.Updata();
    tempInstance.AddDetail(waterFeatureDetail);
    getPlugin().ArkScene.AddTempObject(tempInstance);
    
    window.Currentstep = 0;
    window.waterInterval = window.setInterval("updateWater()",3000)
    // window.setTimeout("updateWater",1000)

}

function reCaculateCoordinate3D(Coordinate2D, currentHeight)
{
    var coordinate3D = [];
    for(var i=0; i<Coordinate2D.length/2; i++)
    {
        var xx = Coordinate2D[i];
        i++;
        var yy = Coordinate2D[i];
        var hh = currentHeight +1000;
        coordinate3D.push(xx);
        coordinate3D.push(yy);
        coordinate3D.push(hh);
    }
    var strJson2 = "{\"Coordinate\":["+coordinate3D.join(",") +"]}";
    console.log(strJson2)
     
    var strJson = "{\"Finish\":true,\"Count\":5,\"Coordinate\":[101.5627995739,42.8726173937,2258.5634081271,111.2000180691,42.7640099053,3924.0806739870,109.4945963171,41.3215041775,2255.8483089022,106.7292391217,41.5346387454,1392.2000128869,106.7292391217,41.5346387454,1392.2000128869]}"
    var coordArray = getPlugin().ArkScene.Json2Vec3Array(strJson2);

    return coordArray;
}
