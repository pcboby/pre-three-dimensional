var fixedModelTreeNodes = [];

function fixedModelTreeOnCheck(event, treeId, treeNode) {
    var parentNode = treeNode.getParentNode(),
        fixedModelManager = getPlugin().FixedModelManager;
    if (!parentNode) {
        var type = fixedModelTreeNodes[treeNode.getIndex()];
        for (var i = 0; i < type.length; i++)
            fixedModelManager.Visible(type[i]) = treeNode.checked;
    } else {
        var i1 = parentNode.getIndex(),
            i2 = treeNode.getIndex();
        fixedModelManager.Visible(fixedModelTreeNodes[i1][i2]) = treeNode.checked;
    }
}

function fixedModelTreeOnDblClick(event, treeId, treeNode) {
    var parentNode = treeNode.getParentNode();
    if (parentNode) {
        var i1 = parentNode.getIndex(),
            i2 = treeNode.getIndex(),
            fixedModelManager = getPlugin().FixedModelManager;
        fixedModelManager.Fly2(fixedModelTreeNodes[i1][i2], 2);
    }
}

function naviPathTreeOnDblClick(event, treeId, treeNode) {
    var parentNode = treeNode.getParentNode();
    if (!parentNode) {
        var naviPathPlayer = getPlugin().ArkScene.GetNavigationPathPlayer();
        naviPathPlayer.NavigationPath = getPlugin().NaviPathManager.GetItemByIndex(treeNode.getIndex()).NavigationPath;
        naviPathPlayer.Play();
    } else {
        var i1 = parentNode.getIndex(),
            i2 = treeNode.getIndex();
        cmeraPose = getPlugin().NaviPathManager.GetItemByIndex(i1).GetItem(i2).CameraPose;
        getPlugin().ArkScene.GetNavigationManager().CameraPose = cmeraPose;
    }
}

function getFixedModelTreeData() {
    var zNodes = [],
        fixedModelManager = getPlugin().FixedModelManager,
        allTypes = JSON.parse(fixedModelManager.AllTypes);
    allTypes = allTypes.Types;
    for (var i = 0; i < allTypes.length; i++) {
        zNodes.push({
            id: i + 1,
            pId: 0,
            name: allTypes[i]
        });
        var typeNodes = JSON.parse(fixedModelManager.TypeNodes(allTypes[i]));
        typeNodes = typeNodes.ID;
        fixedModelTreeNodes.push(typeNodes);
        for (var j = 0; j < typeNodes.length; j++) {
            var fixedModelUid = typeNodes[j],
                fixedModelName = fixedModelManager.Name(fixedModelUid),
                fixedModelVsible = fixedModelManager.Visible(fixedModelUid);
            zNodes.push({
                id: (i + 1) + "-" + (j + 1),
                pId: i + 1,
                name: fixedModelName,
                checked: fixedModelVsible
            });
        }
    }
    return zNodes;
}

function getNaviPathTreeData() {
    var zNodes = [],
        naviPathManager = getPlugin().NaviPathManager;
    naviPathNames = JSON.parse(naviPathManager.GetItemNames());
    for (var i = 0; i < naviPathManager.ItemCount; i++) {
        zNodes.push({
            id: i + 1,
            pId: 0,
            name: naviPathNames[i]
        });
        var naviPathItem = naviPathManager.GetItemByIndex(i);
        for (var j = 0; j < naviPathItem.ItemCount; j++) {
            zNodes.push({
                id: (i + 1) + "-" + (j + 1),
                pId: i + 1,
                name: naviPathItem.GetItem(j).Name
            });
        }
    }
    return zNodes;
}

function initFixedModelTree() {
    var fixedModelTreeSetting = {
        view: {
            showIcon: false,
            showTitle: false,
            dblClickExpand: false
        },
        check: {
            enable: true,
            chkboxType: {
                Y: "ps",
                N: "ps"
            }
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            onCheck: fixedModelTreeOnCheck,
            onDblClick: fixedModelTreeOnDblClick
        }
    };
    $.fn.zTree.init($("#fixedModel_tree"), fixedModelTreeSetting, getFixedModelTreeData());
}

function initNaviPathTree() {
    var naviPathTreeSetting = {
        view: {
            showIcon: false,
            showTitle: false,
            dblClickExpand: false
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            onDblClick: naviPathTreeOnDblClick
        }
    };
    $.fn.zTree.init($("#naviPath_tree"), naviPathTreeSetting, getNaviPathTreeData());
}

$(function() {
    //getPlugin().Initialize("Y:/Project/重庆防汛管理信息化/Data/Terrains/ChongQing.arkpro");
    
    getPlugin().Initialize("D:/3D/Data/Globe/Terrains/globe.arkpro");
    
    initFixedModelTree();
    initNaviPathTree();
})