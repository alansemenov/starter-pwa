// Replace placeholders in manifest.json with actual values
// if you don't want them to be generated dynamically from site config

var portalLib = require('/lib/xp/portal');
var mustache = require('/lib/xp/mustache');

exports.get = function() {
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
            png_192: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(192)', format: 'png'}),
            png_512: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(512)', format: 'png'})
        }
    };
    var res = mustache.render(resolve('/assets/manifest.json'), params);

    return {
        body: res,
        contentType: 'application/json'
    };
};
