// 视图
function RenderModePoint() {
    getPlugin().ArkScene.RenderMode = 0;
}

function RenderModeLine() {
    getPlugin().ArkScene.RenderMode = 1;
}

function RenderModeFill() {
    getPlugin().ArkScene.RenderMode = 2;
}


// 分析量测
function MeasureDist() {//3.1距离量算
    getPlugin().ArkScene.ToolManager.ActiveTool = "DistanceMeasureTool";
}

function MeasureTerrDist() {
    getPlugin().ArkScene.ToolManager.ActiveTool = "TerrDistanceTool";
}

function MeasureArea() {//3.2面积量算
    getPlugin().ArkScene.ToolManager.ActiveTool = "AreaMeasureTool";
}

function MeasureTerrArea() {
    getPlugin().ArkScene.ToolManager.ActiveTool = "TerrAreaTool";
}

function MeasureHeight() {//3.3高度量算
    getPlugin().ArkScene.ToolManager.ActiveTool = "HeightMeasureTool";
}

function MeasureAngle() {
    getPlugin().ArkScene.ToolManager.ActiveTool = "AngleMeasureTool";
}

function MeasureCoordinate() {
    getPlugin().ArkScene.ToolManager.ActiveTool = "CoordinateTool";
}

//清除
function ClearAll() {
    getPlugin().ArkScene.RemoveAllTempObjects();
    getPlugin().ArkScene.ToolManager.DeactiveTool();
    getPlugin().ArkScene.ToolManager.ActiveTool = "";
}


// 4漫游标注
function DrawPoint() {//4.2.1 点标注
    var strToolName = "AddPointTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        // arkATLLib.ToolTypeCode.Point_Tool = 0
        toolManager.CreateTool(0, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function DrawPolyline() {//4.2.2 线标注
    // 绘制多义线DrawPolyline() arkATLLib.ToolTypeCode.Polyline_Tool = 2
    var strToolName = "AddPolylineTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(2, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function DrawPolygon() {//4.2.3 面标注
    //绘制多边形DrawPolygon()arkATLLib.ToolTypeCode.Polygon_Tool=3
    var strToolName = "AddPolygonTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(3, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function DrawRect() {//4.2.4 矩形标注
    //绘制矩形DrawRect() arkATLLib.ToolTypeCode.Rect_Tool = 4
    var strToolName = "AddRectTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(4, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function DrawCircle() {//4.2.5 圆形标注
    //绘制圆形DrawCircle() arkATLLib.ToolTypeCode.Circle_Tool = 11
    var strToolName = "AddCircleTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(11, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function DrawEllipse() {//4.2.6椭圆标注
    //绘制椭圆形DrawEllipse() arkATLLib.ToolTypeCode.Ellipse_Tool = 12
    var strToolName = "AddEllipseTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(12, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function DrawArc() {//4.2.7 弧线标注
    //绘制圆弧DrawArc() arkATLLib.ToolTypeCode.Arc_Tool = 13
    var strToolName = "AddArcTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(13, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function DrawSector() {//4.2.8 扇形标注
    //绘制扇形DrawSector() arkATLLib.ToolTypeCode.Sector_Tool = 14
    var strToolName = "AddSectorTool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(14, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

// 空间分析
function SA_PointBuffer() {
    getPlugin().ArkScene.ToolManager.ActiveTool = "PointBufferTool";
}

function SA_LineBuffer() {
    getPlugin().ArkScene.ToolManager.ActiveTool = "LineBufferTool";
}

function SA_AreaBuffer() {
    getPlugin().ArkScene.ToolManager.ActiveTool = "AreaBufferTool";
}


// 部分功能工具
function AnalyzeSection() {
    //断面分析AnalyzeSection()arkATLLib.ToolTypeCode.Polyline_Tool=2
    var strToolName = "AnalySection_Tool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(2, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function AnalyzeFillDig() {
    //填挖分析AnalyzeFillDig()arkATLLib.ToolTypeCode.Polygon_Tool=3
    var strToolName = "AnalyFillDig_Tool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(3, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function AnalyzeWater() {
    //淹没分析AnalyzeWater()arkATLLib.ToolTypeCode.Polygon_Tool=3
    var strToolName = "AnalyWater_Tool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(3, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function QueryVector() {
    var strToolName = "QueryVector_Tool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(15, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}

function QueryFixedModel() {
    var strToolName = "QueryModel_Tool__";
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (toolManager.GetTool(strToolName) === null) {
        toolManager.CreateTool(5, strToolName);
    }
    toolManager.ActiveTool = strToolName;
}


// 工具消息响应
function OnToolEvent_ElementDraw(strJson) {
    var msg = JSON.parse(strJson);
    if (msg.ToolName === "AddPointTool__") {
        var tempInstance = getPlugin().ArkScene.CreateInstance("PtTool_Inst");
        var labelDetail = getPlugin().ArkScene.CreateDetail(1);

        labelDetail.Text = "点标注";
        labelDetail.TextHaloColor = 0;//(uint)System.Drawing.Color.FromArgb(0, 0, 255).ToArgb();
        labelDetail.RelativeHeight = 30;
        labelDetail.TextAlignment = 2;//arkATLLib.AlignmentCode.Alignment_Right = 2;
        labelDetail.IconUrl = "F:/osgEarth-2.8-32-VS2015/data/placemark32.png";
        labelDetail.IconAlignment = 1;//arkATLLib.AlignmentCode.Alignment_Left = 1;

        var coordArray = getPlugin().ArkScene.Json2Vec3Array(strJson);
        var coord = coordArray.ITEM(0);
        labelDetail.Coordinate = coord;
        labelDetail.Updata();

        tempInstance.AddDetail(labelDetail);
        getPlugin().ArkScene.AddTempObject(tempInstance);
    }
    else if (msg.Finish === true && (msg.ToolName === "AddPolygonTool__" || msg.ToolName === "AddCircleTool__" ||
    msg.ToolName === "AddRectTool__" || msg.ToolName === "AddEllipseTool__" || msg.ToolName === "AddSectorTool__")) {
        var tempInstance = getPlugin().ArkScene.CreateInstance("AreaTool_Inst");
        var featureDetail = getPlugin().ArkScene.CreateDetail(0);

        featureDetail.PointVisible = false;
        featureDetail.LineVisible = false;
        featureDetail.AreaVisible = true;
        //featureDetail.FillColor = 0;//(uint)System.Drawing.Color.FromArgb(192, 128, 128, 255).ToArgb();
        featureDetail.ClampMode = 1;//arkATLLib.ClampModeCode.Clamp_To_Terrain=1;
        featureDetail.ClampTechnique = 1;//arkATLLib.ClampTechniqueCode.Technique_Scene=1;

        var coordArray = getPlugin().ArkScene.Json2Vec3Array(strJson);
        featureDetail.Coordinates = coordArray;
        featureDetail.Updata();

        tempInstance.AddDetail(featureDetail);
        getPlugin().ArkScene.AddTempObject(tempInstance);
    }
    else if (msg.Finish === true && (msg.ToolName === "AddPolylineTool__" || msg.ToolName === "AddArcTool__")) {
        var tempInstance = getPlugin().ArkScene.CreateInstance("LineTool_Inst");
        var featureDetail = getPlugin().ArkScene.CreateDetail(0);

        featureDetail.PointVisible = false;
        featureDetail.LineVisible = true;
        featureDetail.AreaVisible = false;
        //featureDetail.LineColor = 0;//(uint)System.Drawing.Color.FromArgb(192, 128, 255, 0).ToArgb();
        featureDetail.ClampMode = 1;//arkATLLib.ClampModeCode.Clamp_To_Terrain=1;
        featureDetail.ClampTechnique = 1;//arkATLLib.ClampTechniqueCode.Technique_Scene=1;

        var coordArray = getPlugin().ArkScene.Json2Vec3Array(strJson);
        featureDetail.Coordinates = coordArray;
        featureDetail.Updata();

        tempInstance.AddDetail(featureDetail);
        getPlugin().ArkScene.AddTempObject(tempInstance);
    }
}

function OnToolEvent_Analysis(strJson) {
    var msg = JSON.parse(strJson);
    var toolManager = getPlugin().ArkScene.ToolManager;
    if (msg.Finish === true && msg.ToolName === "AnalySection_Tool__" && msg.Coordinate.length > 3) {
        var result = getPlugin().ArkScene.IntersectByGeoPoints(strJson);
        var msgInter = new ElemDrawToolMsg(result);
        //alert();//这里显示对话框
    }
    else if (msg.Finish === true && msg.ToolName === "AnalyFillDig_Tool__") {
        //arkATLLib.TerrainModifyTypeCode.Terrain_Hole=1
        var terrModify = getPlugin().ArkScene.TerrainModificationManager.CreateModification(1, "hole");
        terrModify.ModifyPolygon = strJson;
        terrModify.Apply = true;
    }
    else if (msg.Finish === true && msg.ToolName === "AnalyWater_Tool__") {
        var clr = 0;//颜色uint clr = (uint)(Color.FromArgb(58, 58, 192).ToArgb());
        if (toolManager.arkTreePane != null)
            toolManager.arkTreePane.AddWater("water", strJson, true, 900, 10, true, false, clr, "", 0.8, 1, 1, 100);
    }
}

function OnToolEvent_Query(strJson) {
    var msg = JSON.parse(strJson);
    if (msg.ToolName === "QueryVector_Tool__") {
        alert(strJson);
    }
    else if (msg.ToolName === "QueryModel_Tool__") {
        alert(strJson);
    }
}