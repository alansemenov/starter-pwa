// Replace placeholders in manifest.json with actual values
// if you don't want them to be generated dynamically from site config

var portalLib = require('/lib/xp/portal');
var mustache = require('/lib/xp/mustache');

var getContentType = function(fileName) {
    if (fileName.endsWith('json')) {
        return 'application/json';
    }

    if (fileName.endsWith('xml')) {
        return 'application/xml';
    }

    return '';
};

exports.get = function(req) {
    var pathArr = req.path.split('/');
    var fileName = '/assets/precache/' + pathArr[pathArr.length-1];
    var sitePath = portalLib.getSite()._path;
    var siteUrl = portalLib.pageUrl({path: sitePath});
    var siteConfig = portalLib.getSiteConfig();

    var params = {
        name: siteConfig.appName,
        shortName: siteConfig.appShortName || siteConfig.appName,
        description: siteConfig.appDescription,
        themeColor: siteConfig.appThemeColor,
        backgroundColor: siteConfig.appBgColor,
        display: siteConfig.appDisplay,
        siteUrl: (siteUrl == '/') ? '/' : siteUrl + '/',
        icons: {
            png_150: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(150)',_format: 'png'}),
            png_192: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(192)', format: 'png'}),
            png_512: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(512)', format: 'png'})
        }
    };
    var res = mustache.render(resolve(fileName), params);

    return {
        body: res,
        contentType: getContentType(fileName)
    };
};
