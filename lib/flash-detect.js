/**
 * Browser Flash Plugin Version Detection
 * @description Detects the major version number of the browsers flash Plugin, returns 0 if none present.
 * @module ad-utils/flash-detect
 * @returns {number} the flash version
 */
module.exports = function () {
    var i, a, o, p, s = 'Shockwave',
        f = 'Flash',
        t = ' 2.0',
        u = s + ' ' + f,
        v = s + f + '.',
        rSW = RegExp('^' + u + ' (\\d+)');
    if ((o = navigator.plugins) && (p = o[u] || o[u + t]) && (a = p.description.match(rSW))) {
        return a[1];
    } else if (!!(window.ActiveXObject)) {
        for (i = 10; i > 0; i--) {
            try {
                if (!!(new ActiveXObject(v + v + i))) {
                    return i;
                }
            } catch (e) {}
        }
    }
    return 0;
};
