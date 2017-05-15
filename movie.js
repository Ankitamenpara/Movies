var fs = require('fs');
var Table = require('cli-table');




fs.readFile('movies.dat', 'utf8', function(err, data) {
    if (err) {
        return console.log (err);

    }
    
    var text = data.toString();
    var regexp = /\(\d{4}\)/g;
    var array2 = [];
    array2 = text.match(regexp);
    array2.sort();
       

var a = array2.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })

        
    var current = null;
    var count = 0;
    for (var j = 0; j < array2.length; j++) {
        if (array2[j] != current) {
            if (count > 0) {
                console.log(current + '--> ' + count);
            }

            current = array2[j];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0) {
        console.log(current + '--> ' + count);
    }
});






     





    






