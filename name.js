
var fs = require('fs');
var Table = require('cli-table');


fs.readFile('movies.dat', 'utf8', function(err, data) {
    if (err) {
        return console.log (err);

    }
    
    var text = data.toString();
    var regexpyear = /\(\d{4}\)/g;
    var regexpmovie = /::(.*):\:/g;
    var arrayyear = [];
    arrayyear = text.match(regexpyear);
    arrayyear.sort();
    var arraymovie = [];
    arraymovie = text.match(regexpmovie);
    //console.log(arraymovie[7]);
var a = arrayyear.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })

     
 
    var current = null;
    var cnt = 0;
    for (var j = 0; j < arrayyear.length; j++) {
        if (arrayyear[j] != current) {
            if (cnt > 0) {
                //console.log(current + '--> ' + arraymovie[j]);
            }

            current = arrayyear[j];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        //console.log(current + '--> ' + arraymovie[j]);
    }
    

let matches = arraymovie.filter(s => s.includes(process.argv[2]));

console.log(matches) ;




});
