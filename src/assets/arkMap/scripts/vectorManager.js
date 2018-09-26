var vectorTreeNodes = [];//矢量，专题管理

function vectorTreeOnCheck(ischecked, treeId) {
    //响应，传入树控件的叶节点check状态，对应id。id是唯一的，在初始化时传入
    //只接收叶节点id，check中父节点，请先遍历父节点，再调用传入其子节点的id
    vectorManager = getPlugin().VectorManager;
    vectorManager.Visible(treeId) = ischecked; 
    // console.log("矢量可视化",treeId);
    // console.log("矢量可视化",ischecked);
}

function vectorTreeOnDblClick( treeId) {
    //响应，传入叶节点的id。
    vectorManager.Fly2(treeId, 2);
}

function getVectorTreeData() {
    //获取树节点数据
    var zNodes = [];
    var checkedKeys = [];
        var vectorManager = getPlugin().VectorManager;
        allTypes1 = JSON.parse(vectorManager.AllTypes);
        console.log(allTypes1);
        allTypes = allTypes1.Types;
        for (var i = 0; i < allTypes.length; i++) {
            var parentNodeName = allTypes[i];
            var typeNodes = JSON.parse(vectorManager.TypeNodes(parentNodeName));
            if(typeNodes.ID.length>0)
            {
                vectorTreeNodes.push(typeNodes);
                console.log(typeNodes.ID);
                var zChildNodes = [];
                for (var j = 0; j < typeNodes.ID.length; j++) 
                {
                    var vectorUid = typeNodes.ID[j],
                        vectorName = vectorManager.Name(vectorUid),
                        vectorVsible = vectorManager.Visible(vectorUid);
                    zChildNodes.push({
                        key: vectorUid,//子节点用于标识的唯一ID。传入ark的唯一标识
                        title: vectorName,//显示在网页树控件的节点名称
                        // checked: vectorVsible,//checkbox初始化节点选中状态
                        isLeaf: true
                    });
                    if(vectorVsible)
                    checkedKeys.push(vectorUid);
                }
                zNodes.push({
                    title: parentNodeName,//父节点 名称
                    key: i,
                    children: zChildNodes//子节点
                });
            }
        }
        // var vecTreeNode = [];
        // vecTreeNode.push({
        //     title: '矢量数据',
        //     key: '001',
        //     children:zNodes
        // })
        // var treeSetNodes = [];
        // treeSetNodes.push({
        //     checkedKeys: checkedKeys,
        //     nodes: vecTreeNode
        // })    
        return {
        title: '矢量数据',
        key: '001',
        children: zNodes
    }
}