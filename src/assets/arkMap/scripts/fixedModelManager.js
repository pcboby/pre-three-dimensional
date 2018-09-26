//模型管理
var fixedModelTreeNodes = [];

function fixedModelTreeOnCheck(ischecked, treeId) {
    //响应，传入树控件的叶节点check状态，对应id。id是唯一的，在初始化时传入
    //只接收叶节点id，check中父节点，请先遍历父节点，再调用传入其子节点的id
    fixedModelManager = getPlugin().FixedModelManager;
    fixedModelManager.Visible(treeId) = ischecked;
}

function fixedModelTreeOnDblClick(treeId) {
    //响应，传入叶节点的id。
    alert("定位", treeId)
    fixedModelManager.Fly2(treeId, 2);
}

function getFixedModelTreeData() {
    //获取树节点数据
    //获取树节点数据
    // return JSON.parse(getPlugin().FixedModelManager.AllTypes).Types;

    var zNodes = [];
    var checkedKeys = [];
    var fixedModelManager = getPlugin().FixedModelManager;
    allTypes1 = JSON.parse(fixedModelManager.AllTypes);
    console.log(allTypes1);
    allTypes = allTypes1.Types;
    for (var i = 0; i < allTypes.length; i++) {
        var parentNodeName = allTypes[i];
        var typeNodes = JSON.parse(fixedModelManager.TypeNodes(parentNodeName));
        if (typeNodes.ID.length > 0) {
            fixedModelTreeNodes.push(typeNodes);
            console.log(typeNodes.ID);
            var zChildNodes = [];
            for (var j = 0; j < typeNodes.ID.length; j++) {
                var fixedModelUid = typeNodes.ID[j],
                    fixedModelName = fixedModelManager.Name(fixedModelUid),
                    fixedModelVsible = fixedModelManager.Visible(fixedModelUid);
                zChildNodes.push({
                    key: fixedModelUid, //子节点用于标识的唯一ID。传入ark的唯一标识
                    title: fixedModelName, //显示在网页树控件的节点名称
                    // checked: fixedModelVsible,//checkbox初始化节点选中状态
                    isLeaf: true
                });
                if (fixedModelVsible)
                    checkedKeys.push(fixedModelUid);
            }
            zNodes.push({
                title: parentNodeName, //父节点 名称
                key: i,
                children: zChildNodes //子节点
            });
        }
    }
    // var vecTreeNode = [];
    // vecTreeNode.push({
    //     title: '模型数据',
    //     key: '001',
    //     children: zNodes
    // })
    // var treeSetNodes = [];
    // treeSetNodes.push({
    //     checkedKeys: checkedKeys,
    //     nodes: vecTreeNode
    // })
    // return treeSetNodes;
    return {
        title: '模型数据',
        key: '001',
        children: zNodes
    }
}