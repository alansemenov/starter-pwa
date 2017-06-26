var ioLib = require('/lib/xp/io');

exports.get = function() {
    var res = ioLib.getResource(resolve('../../assets/icons/favicon.ico'));

    return {
        body: res.getStream(),
        contentType: 'image/x-icon'
    };
};
