var portalLib = require('/lib/xp/portal');
var mustache = require('/lib/xp/mustache');

exports.get = function() {
    var siteConfig = portalLib.getSiteConfig();

    var params = {
        iconUrl: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(150)',_format: 'png'})
    };
    
    var res = mustache.render(resolve('browserconfig.xml'), params);

    return {
        body: res,
        contentType: 'application/xml'
    };
};
