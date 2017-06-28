var portalLib = require('/lib/xp/portal');
var parentPath = './';
var view = resolve(parentPath + 'main.page.html');
var mustacheLib = require('/lib/xp/mustache');

function handleGet() {
    var site = portalLib.getSite();
    var siteConfig = portalLib.getSiteConfig();

    var siteUrl = portalLib.pageUrl({
        path: site._path
    });
    
    var params = {
        appVersion: app.version,
        assetUrl: portalLib.assetUrl(''),
        siteUrl: (siteUrl === '/') ? '' : siteUrl,
        baseHref: siteUrl + '/',
        themeColor: siteConfig.appThemeColor,
        icons: {
            png_16: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(16)', format: 'png'}),
            png_32: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(32)', format: 'png'}),
            png_180: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(64)', format: 'png'})
        }
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


