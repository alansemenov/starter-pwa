var portalLib = require('/lib/xp/portal');
var parentPath = './';
var view = resolve(parentPath + 'main.page.html');
var mustacheLib = require('/lib/xp/mustache');

function handleGet() {
    var site = portalLib.getSite();

    var baseHref = portalLib.pageUrl({
        path: site._path
    });
    
    var params = {
        appVersion: app.version,
        assetUrl: portalLib.assetUrl(''),
        baseHref: (baseHref === '/') ? '' : baseHref
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


