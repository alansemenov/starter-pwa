var portalLib = require('/lib/xp/portal');
var mustache = require('/lib/xp/mustache');
var helper = require('/lib/helper');

exports.get = function() {
    var siteConfig = portalLib.getSiteConfig();
    var sitePath = portalLib.getSite()._path;

    var params = {
        siteUrl : portalLib.pageUrl({path: sitePath}),
        icons: {
            png_16: helper.getSquareImageUrl(siteConfig.appIcon, 16),
            png_32: helper.getSquareImageUrl(siteConfig.appIcon, 32),
            png_180: helper.getSquareImageUrl(siteConfig.appIcon, 180)
        }
    };
    
    return {
        headers: {
            'Service-Worker-Allowed': params.siteUrl
        },
        contentType: 'application/javascript',
        body: mustache.render(resolve('/assets/sw.js'), params)
    };
};
