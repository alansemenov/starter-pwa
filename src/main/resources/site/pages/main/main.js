var portal = require('/lib/xp/portal');
var parentPath = './';
var view = resolve(parentPath + 'main.page.html');
var mustacheLib = require('/lib/xp/mustache');

function handleGet(req) {

    var params = {
        appVersion: app.version,
        assetUrl: portal.assetUrl('')
    };
        
    var body = mustacheLib.render(view, params);

    return {
        contentType: 'text/html',
        headers: {
            'Service-Worker-Allowed': '/'
        },
        body: body
    };
}

exports.get = handleGet;


