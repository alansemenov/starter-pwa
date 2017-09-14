var portalLib = require('/lib/xp/portal');
var mustache = require('/lib/xp/mustache');

exports.get = function(req) {
    var siteConfig = portalLib.getSiteConfig();
    var sitePath = portalLib.getSite()._path;

    var params = {
        siteUrl : portalLib.pageUrl({path: sitePath}),
        icons: {
            png_16: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(16)', format: 'png'}),
            png_32: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(32)', format: 'png'}),
            png_180: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(180)', format: 'png'})
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
