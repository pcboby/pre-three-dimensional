$(function() {
    var host = window.location.host;
    var url = 'http://' + host + '/assets/Data/Terrains/ChongQing.arkpro';
    console.log(url);
    document.querySelector('#ArkObj').Initialize(url);
});


function test() {
    console.log('arkHtml111');
}

function test1(val) {
    console.info('arkHtml:', val);
}

function test2() {
    console.info('arkHtml:');
    return {
        a: 'aaaa',
        b: 'bbbb'
    }
}

function getObjData() {
    // fjdlsafkjd
    return 'abcdefg';
}

function testX(val) {
    console.log('child:', val);
    return getObjData();
}