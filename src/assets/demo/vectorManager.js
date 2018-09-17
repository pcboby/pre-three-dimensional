var vectorTreeNodes = [];

function vectorTreeOnCheck(event, treeId, treeNode) {
    var parentNode = treeNode.getParentNode(),
        vectorManager = getPlugin().VectorManager;
    if (!parentNode) {
        var type = vectorTreeNodes[treeNode.getIndex()];
        for (var i = 0; i < type.length; i++)
            vectorManager.Visible(type[i]) = treeNode.checked;
    } else {
        var i1 = parentNode.getIndex(),
            i2 = treeNode.getIndex();
        vectorManager.Visible(vectorTreeNodes[i1][i2]) = treeNode.checked;
    }
}

function vectorTreeOnDblClick(event, treeId, treeNode) {
    var parentNode = treeNode.getParentNode();
    if (parentNode) {
        var i1 = parentNode.getIndex(),
            i2 = treeNode.getIndex(),
            vectorManager = getPlugin().VectorManager;
        vectorManager.Fly2(vectorTreeNodes[i1][i2], 2);
    }
}

function getPlugin() {
    return document.getElementById('ArkObj');
}

function initVectorTree() {
    var vectorTreeSetting = {
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
            onCheck: vectorTreeOnCheck,
            onDblClick: vectorTreeOnDblClick
        }
    };
    $.fn.zTree.init($("#jstree"), vectorTreeSetting, getVectorTreeData());
}


function getVectorTreeData() {
    var zNodes = [];
        var vectorManager = getPlugin().VectorManager;
        allTypes = JSON.parse(vectorManager.AllTypes);
        console.log(allTypes);
        allTypes = allTypes.Types;
        for (var i = 0; i < allTypes.length; i++) {
            zNodes.push({
                id: i + 1,
                pId: 0,
                name: allTypes[i]
            });
            var typeNodes = JSON.parse(vectorManager.TypeNodes(allTypes[i]));
            typeNodes = typeNodes.ID;
            vectorTreeNodes.push(typeNodes);
            for (var j = 0; j < typeNodes.length; j++) {
                var vectorUid = typeNodes[j],
                    vectorName = vectorManager.Name(vectorUid),
                    vectorVsible = vectorManager.Visible(vectorUid);
                zNodes.push({
                    id: (i + 1) + "-" + (j + 1),
                    pId: i + 1,
                    name: vectorName,
                    checked: vectorVsible
                });
            }
        }
        return zNodes;
}

$(function() {
    initVectorTree();
})