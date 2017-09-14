var mustache = require('/lib/xp/mustache');

var getContentType = function(fileName) {
    if (fileName.endsWith('.js')) {
        return 'application/javascript';
    }

    if (fileName.endsWith('.css')) {
        return 'text/css';
    }

    if (fileName.endsWith('.svg')) {
        return 'image/svg+xml';
    }

    return '';
};

var getAssetPath = function(path) {
    return path.replace(path.substr(0, path.indexOf('precache')), '');
};

exports.get = function(req) {
    var fileName = '/assets/' + getAssetPath(req.path);
    
    return {
        body: mustache.render(resolve(fileName), {}),
        contentType: getContentType(fileName)
    };
};
