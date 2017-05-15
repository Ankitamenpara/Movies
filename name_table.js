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
    //var sp = arraymovie.split(",");
    //console.log(arraymovie);
    //var array =[];
    //array.push(sp);
   
   

let matches = arraymovie.filter(s => s.includes(process.argv[2]));

var table = new Table({
        head: ['YEAR', 'Movies'],
        colWidths: [10,50]
        

        
    });
    
        table.push([
            process.argv[2],
            matches  
        ]);
    

   console.log(table.toString());


});



