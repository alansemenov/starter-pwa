var portalLib = require('/lib/xp/portal');
var ioLib = require('/lib/xp/io');
var mustache = require('/lib/xp/mustache');

exports.get = function(req) {
    var pathArr = req.path.split('/');
    var fileName = pathArr[pathArr.length-1];
    var res = ioLib.getResource('/assets/' + fileName);
    var stream = res.getStream();
    var siteConfig = portalLib.getSiteConfig();
    var responseObj = {};
    
    if (fileName == 'sw.js') {
        var sitePath = portalLib.getSite()._path;
        var params = {
            siteUrl : portalLib.pageUrl({path: sitePath}),
            icons: {
                png_16: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(16)', format: 'png'}),
                png_32: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(32)', format: 'png'}),
                png_180: portalLib.imageUrl({id: siteConfig.appIcon, scale: 'square(180)', format: 'png'})
            }
        };
        
        responseObj = {
            headers: {
                'Service-Worker-Allowed': params.siteUrl
            },
            body: mustache.render(resolve('/assets/' + fileName), params)
        };
    }
    else {
        responseObj.body = stream;
    }

    if (fileName.endsWith('js')) {
        responseObj.contentType = 'application/javascript';
    }
    else if (fileName.endsWith('css')) {
        responseObj.contentType = 'text/css';
    }
    
    return responseObj;
};
