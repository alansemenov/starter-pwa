var portalLib = require('/lib/xp/portal');

exports.getSquareImageUrl = function(imageId, size, format) {
    var f = format || 'png';
    
    return portalLib.imageUrl({id: imageId, scale: 'square(' + size + ')', format: f});
};

exports.getAssetContentType = function(assetName) {
    if (assetName.endsWith('.js')) {
        return 'application/javascript';
    }

    if (assetName.endsWith('.css')) {
        return 'text/css';
    }

    if (assetName.endsWith('.svg')) {
        return 'image/svg+xml';
    }
    
    if (assetName.endsWith('json')) {
        return 'application/json';
    }

    if (assetName.endsWith('xml')) {
        return 'application/xml';
    }
    
    return '';
};
