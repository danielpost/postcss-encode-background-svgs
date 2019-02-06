/**
 * Check to see if value contains the string 'data:image/svg+xml'
 * @param String decVal - CSS value
 */
module.exports = {
    /**
     * @return Boolean
     */
    isBackgroundSVG(decVal) {
        return decVal.indexOf('data:image/svg+xml') !== -1;
    }
};
