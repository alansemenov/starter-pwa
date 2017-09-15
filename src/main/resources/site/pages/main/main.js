var portalLib = require('/lib/xp/portal');
var parentPath = './';
var view = resolve(parentPath + 'main.page.html');
var mustacheLib = require('/lib/xp/mustache');
var helper = require('/lib/helper');

function handleGet(req) {
    var site = portalLib.getSite();
    var siteConfig = portalLib.getSiteConfig();

    var baseUrl = portalLib.pageUrl({
        path: site._path
    });
    
    var params = {
        siteName: siteConfig.appName || site.displayName,
        isLive: (req.mode == 'live'),
        appVersion: app.version,
        assetUrl: portalLib.assetUrl(''),
        siteUrl: (baseUrl === '/') ? '' : baseUrl,
        baseUrl: baseUrl,
        themeColor: siteConfig.appThemeColor,
        icons: {
            png_16: helper.getSquareImageUrl(siteConfig.appIcon, 16),
            png_32: helper.getSquareImageUrl(siteConfig.appIcon, 32),
            png_180: helper.getSquareImageUrl(siteConfig.appIcon, 180)
        }
    };
        
    var body = mustacheLib.render(view, params);

    return {
        contentType: 'text/html',
        body: body
    };
}

exports.get = handleGet;


