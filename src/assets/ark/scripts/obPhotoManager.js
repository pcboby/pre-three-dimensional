//倾斜管理
var obPTreeNodes = [];

function obPTreeOnCheck(ischecked, treeId) {
    //响应，传入树控件的叶节点check状态，对应id。id是唯一的，在初始化时传入
    //只接收叶节点id，check中父节点，请先遍历父节点，再调用传入其子节点的id
    obPManager = getPlugin().ObPhotoManager;
}

function obPTreeOnDblClick( treeId) {
    //响应，传入叶节点的id。
    obPManager.Fly2(treeId, 2);
}

function getObPhotoTreeData() {
    //获取树节点数据
    var zNodes = [];
    var checkedKeys = [];
        var oliqueManager = getPlugin().ObPhotoManager;
        allTypes1 = JSON.parse(oliqueManager.AllTypes);
        console.log(allTypes1);
        allTypes = allTypes1.Types;
        for (var i = 0; i < allTypes.length; i++) {
            var parentNodeName = allTypes[i];
            var typeNodes = JSON.parse(oliqueManager.TypeNodes(parentNodeName));
            if(typeNodes.ID.length>0)
            {
                oliqueTreeNodes.push(typeNodes);
                console.log(typeNodes.ID);
                var zChildNodes = [];
                for (var j = 0; j < typeNodes.ID.length; j++) 
                {
                    var oliqueUid = typeNodes.ID[j],
                        oliqueName = oliqueManager.Name(oliqueUid),
                        oliqueVsible = oliqueManager.Visible(oliqueUid);
                    zChildNodes.push({
                        key: oliqueUid,//子节点用于标识的唯一ID。传入ark的唯一标识
                        title: oliqueName,//显示在网页树控件的节点名称
                        // checked: oliqueVsible,//checkbox初始化节点选中状态
                        isLeaf: true
                    });
                    if(oliqueVsible)
                    checkedKeys.push(oliqueUid);
                }
                zNodes.push({
                    title: parentNodeName,//父节点 名称
                    key: i,
                    children: zChildNodes//子节点
                });
            }
        }
        var vecTreeNode = [];
        vecTreeNode.push({
            title: '倾斜数据',
            key: '001',
            children:zNodes
        })
        var treeSetNodes = [];
        treeSetNodes.push({
            checkedKeys: checkedKeys,
            nodes: vecTreeNode
        })
        return treeSetNodes;
}
