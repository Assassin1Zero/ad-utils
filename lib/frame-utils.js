/**
 * Helper functions for working within iFrames
 * @module ad-utils/frame-utils
 */
module.exports = {

    /**
     * Returns the URL pathname of parent window
     * @memberof ad-utils/frame-utils
     * @return {String} the pathname
     */
    pathname: function () {

        if (!this.isFramed()) {
            return window.location.pathname;
        }

        var a = document.createElement('a');
        a.href = document.referrer;
        return a.pathname;
    },

    /**
     * Returns the URL hostname of parent window
     * @memberof ad-utils/frame-utils
     * @return {String} the hostname
     */
    hostname: function () {

        if (!this.isFramed()) {
            return window.location.hostname;
        }
        var a = document.createElement('a');
        a.href = document.referrer;
        return a.hostname;
    },

    /**
     * Detect if script is contained within an iframe
     * @memberof ad-utils/frame-utils
     * @return {Boolean} returns true if we're in a frame
     */
    isFramed: function () {

        return (window.self !== window.top);
    },

    /**
     * Return the parent window
     * @memberof ad-utils/frame-utils
     * @return {[type]} [description]
     */
    topWindow: function () {

        if (!this.isFramed()) {
            return window;
        }
        return window.top;
    },

    /**
     * Return a reference to the containing iframe
     * @memberof ad-utils/frame-utils
     * @return {HTMLElement} the iframe
     */
    adFrame: function () {

        if (!this.isFramed()) {
            throw new Error('Ad is not framed');
        }

        var fid = window.frameElement.getAttribute('id');

        if (!fid) {
            throw new Error('Frame does not have an id');
        }
        
        return this.topWindow().document.getElementById(fid);
    }
};
