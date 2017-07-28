var portalLib = require('/lib/xp/portal');
var ioLib = require('/lib/xp/io');

exports.get = function(req) {
    var pathArr = req.path.split('/');
    var fileName = pathArr[pathArr.length-1];
    var res = ioLib.getResource('/assets/' + fileName);
    var stream = res.getStream();

    var responseObj = {
        body: stream
    };
    
    if (fileName == 'sw.js') {
        var sitePath = portalLib.getSite()._path;
        var params = {
            siteUrl : portalLib.pageUrl({path: sitePath})
        };

        responseObj.headers = {
            'Service-Worker-Allowed': params.siteUrl
        };
    }

    if (fileName.endsWith('js')) {
        responseObj.contentType = 'application/javascript';
    }
    else if (fileName.endsWith('css')) {
        responseObj.contentType = 'text/css';
    }
    
    return responseObj;
};
