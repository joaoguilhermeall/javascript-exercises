// Internationalization
// The concepts of internationalization is ultil, but for specific cases of use.

/**
 * Formmat number
 * 
 * @param {number} myNumber 
 * @param {string} region
 *  
 * @returns 
 */
function intlNumber(myNumber, region) {
    let numberFormat = new Intl.NumberFormat(region);
    
    return numberFormat.format(myNumber);
}

/**
 * Convert a datetime
 * 
 * @param {any} myDate 
 * @param {number} region 
 * @returns 
 */
function intlDate(myDate, region) {
    let dateFormat = Intl.DateTimeFormat(region);

    return dateFormat.format(myDate);
}
if (require.main === module) {
    console.log(intlNumber(1000, "pt-BR"));
    console.log(intlDate(new Date(), "pt-BR"));
}
