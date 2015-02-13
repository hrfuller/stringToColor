/********************************************************
 Name: string_to_color
 Description: create a hash from a string then generates a color
 Usage:
 Author: Brandon Corbin [code@icorbin.com]
 Website: http://icorbin.com
 ********************************************************/

define(["exports"], function (exports) {
    "use strict";

    function string_to_color(str) {
        "use strict";
        // Generate a Hash for the String
        var hash = function (word) {
            var h = 0;
            for (var i = 0; i < word.length; i++) {
                h = word.charCodeAt(i) + ((h << 5) - h);
            }
            return h;
        };

        // Change the darkness or lightness
        var shade = function (color, prc) {
            var num = parseInt(color, 16),
                amt = Math.round(2.55 * prc),
                R = (num >> 16) + amt,
                G = (num >> 8 & 255) + amt,
                B = (num & 255) + amt;
            return (16777216 + (R < 255 ? R < 1 ? 0 : R : 255) * 65536 + (G < 255 ? G < 1 ? 0 : G : 255) * 256 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
        };

        // Convert init to an RGBA
        var int_to_rgba = function (i) {
            return (i >> 24 & 255).toString(16) + (i >> 16 & 255).toString(16) + (i >> 8 & 255).toString(16) + (i & 255).toString(16);
        };

        return shade(int_to_rgba(hash(str)), -10);
    }
});