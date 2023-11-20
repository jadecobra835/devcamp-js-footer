'use strict';
// use strict makes it so that everything that is best practice is now a requirement instead of an option.

// This is an old verions of the import statement. (Just in case they are using old JavaScript)
var moment = require('moment');

// This is our instructions of how they need to run this function.
/**
 * Returns a div element with a footer and updating year
 * @param {string} name
 * @return {string}
 */

// exports will export packages. again this is an older syntax. 
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + "All rights reserved";
};