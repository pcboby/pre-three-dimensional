$(function() {
    getPlugin().Initialize(getUrl())
})

function getUrl() {
    var url = 'http://' + window.location.host + '/assets/Data/Terrains/ChongQing.arkpro';
    // var url = 'E:/works/github/pre-three-dimensional/src/assets/Data/Terrains/ChongQing.arkpro';
    return url;
}

function getPlugin() {
    return $('#ArkObj')[0];
}