//模型管理
var fixedModelTreeNodes = [];

function fixedModelTreeOnCheck(ischecked, treeId) {
    //响应，传入树控件的叶节点check状态，对应id。id是唯一的，在初始化时传入
    //只接收叶节点id，check中父节点，请先遍历父节点，再调用传入其子节点的id
    fixedModelManager = getPlugin().FixedModelManager;
}

function fixedModelTreeOnDblClick( treeId) {
    //响应，传入叶节点的id。
    fixedModelManager.Fly2(treeId, 2);
}

function getFixedModelTreeData() {
    //获取树节点数据
    var zNodes = [];
        var fixedModelManager = getPlugin().FixedModelManager;
        allTypes1 = JSON.parse(fixedModelManager.AllTypes);
        console.log(allTypes1);
        allTypes = allTypes1.Types;
        for (var i = 0; i < allTypes.length; i++) {
            var parentNodeName = allTypes[i];
            var typeNodes = JSON.parse(fixedModelManager.TypeNodes(parentNodeName));
            if(typeNodes.ID.length>0)
            {
                fixedModelTreeNodes.push(typeNodes);
                console.log(typeNodes.ID);
                var zChildNodes = [];
                for (var j = 0; j < typeNodes.ID.length; j++) 
                {
                    var fixedModelUid = typeNodes.ID[j],
                        fixedModelName = fixedModelManager.Name(fixedModelUid),
                        fixedModelVsible = fixedModelManager.Visible(fixedModelUid);
                    zChildNodes.push({
                        id: fixedModelUid,//子节点用于标识的唯一ID。传入ark的唯一标识
                        name: fixedModelName,//显示在网页树控件的节点名称
                        checked: fixedModelVsible//checkbox初始化节点选中状态
                    });
                }
                zNodes.push({
                    currentNode :parentNodeName,//父节点 名称
                    childrenNode: zChildNodes//子节点
                });
            }
        }
        console.log(zNodes)
        return zNodes;
}
