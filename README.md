String to Color
===============

Tiny library to generate the same nice hex color for a string in Javascript. 

###Features 

- Sexy colors, not muddy browns and boring grays
- Binary safe
- Only 0.5kb minified



### Why it needed to exist 

I needed a way to generate a consistent NICE color for any given word to assign a tag it's own independent color 
(without knowing what all tags are).



### How to use it

You can use the string-to-color.js as a module.

For example add it to your bower.json

    "dependencies": {
        "stringToColor": "git@github.com:derTobsch/string_to_color.git#1.0"
    }


As common JavaScript function

    var color = '#' + getColor('String');


###Demo 

http://icorbin.com/code/string_to_color/example.html



###License
 
String to color is licensed under the Apache License 2.0