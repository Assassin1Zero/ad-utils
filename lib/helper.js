/**
 * Helper functions
 * @module ad-utils/misc-utils
 */
module.exports = {

    /**
     * Returns query string parameters as an object
     * @memberof ad-utils/misc-utils
     * @return {Object}
     */
    qsToObject: function () {

        var s = location.search,
            q = s.substr(s.indexOf('?') + 1)
                .split('&')
                .reduce(function(o, v, i) {
                    var p = v.split('=');
                    o[p[0]] = p[1];
                    return o;
                }, {});
        return q;
    },

    /**
     * Apply a callback to a collection of elements
     * @param {string} selector - the elements selector
     * @param {Function} callback - the call back function
     * @param {Document} context - the document
     */
    query: function(selector, callback, context) {

        var d = (context) ? context : document;

    	[].forEach.call(d.querySelectorAll(selector), function(el, i, a) {

    		callback(el, i, a);
    	});

    },

    /**
     * Create an element
     * @param {string} type - the type of element (div, p, span etc.)
     * @param {string} id - the elements id
     * @param {object} style - an object containing CSS styles
     */
    createElement: function (type, id, style) {

        var el = document.createElement(type);

    	if (id) {

    		el.id = id;
    	}

    	if (style) {

    		for (var k in style) {
    			el.style[k] = style[k];
    		}
    	}
    	return el;
    },

    /**
     * Add an event listener
     * @param {string} eventName - the name of the event to be fired
     * @param {Function} callback the call back function
     * @param {Document} context - document object containing the stage
     */
    addEvent: function (eventName, callback, context) {

        var d = (context) ? context : document;

    	if (document.addEventListener) {

    		d.addEventListener(eventName, callback);

    	} else {

    		d.attachEvent('on' + eventName, callback);

    	}
    }
};
