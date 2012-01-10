/**
 * jquery.placeholder http://matoilic.github.com/jquery.placeholder
 *
 * @version v0.2.3
 * @author Mato Ilic <info@matoilic.ch>
 * @copyright 2012 Mato Ilic
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($) {
    $.pwstrength = function(password) {
        var score = 0, length = password.length, upperCase, lowerCase, digits, nonAlpha;
        
        if(length < 5) score += 3;
        else if(length < 8) score += 6;
        else if(length < 16) score += 12;
        else score += 18;
        
        lowerCase = password.match(/[a-z]/g);
        if(lowerCase) score += 1;
        
        upperCase = password.match(/[A-Z]/g);
        if(upperCase) score += 5;
        
        if(upperCase && lowerCase) score += 2;
        
        digits = password.match(/\d/g);
        if(digits && digits.length) score += 5;
        
        nonAlpha = password.match(/\W/g)
        if(nonAlpha) score += (nonAlpha.length > 1) ? 10 : 5;
        
        if(upperCase && lowerCase && digits && nonAlpha) score += 5;

        if(password.match(/\s/)) score += 10;

        if(score < 16) return 0;
        if(score < 25) return 1;
        if(score < 35) return 2;
        if(score < 45) return 3;
        return 4;
    };
    
    $.fn.pwstrength = function() {
        
    };
})(jQuery);