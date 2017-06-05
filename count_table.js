var fs = require('fs');
var Table = require('cli-table');

fs.readFile('movies.dat', 'utf8', function(err, data) {
    if (err) {
        return console.log (err);

    }
    
    var text = data.toString();
    var regexpYear = /\(\d{4}\)/g;
    var arrayYear = [];
    arrayYear = text.match(regexpYear);

    arrayYear.sort();
       

    var a = arrayYear.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })
    

    var table = new Table({
        head: ['YEAR', 'Movies'],
        colWidths: [10,20]
    });
        
    var current = null;
    var count = 0;
    for (var j = 0; j < arrayYear.length; j++) {
        if (arrayYear[j] != current) {
            if (count > 0) {
                              
            table.push([
            current,
            count  
        ]);
               
            }

            current = arrayYear[j];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0) {
             
            table.push([
            current,
            count  
        ]);
    }

    var answer1 = process.argv[2];
    

    switch (answer1) {
        case "noOfMoviesAcc":
           
        table.sort(noOfMoviesAcc);
        function noOfMoviesAcc(a,b){ 
            if (a[1] === b[1]) {
            return 0;
            }else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }

        console.log(table.toString());
        break;

        case "noOfMoviesDes":

        table.sort(noOfMoviesDes);
        
        function noOfMoviesDes(a,b){
            if (a[1] === b[1]) {
            return 0;
            }else {
                return (a[1] > b[1]) ? -1 : 1;
            }
        }

        console.log(table.toString());
        break;

        case "yearAcc":

        table.sort(yearAcc);

        function yearAcc(a, b) {
            if (a[0] === b[0]) {
            return 0;
            }else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }
        console.log(table.toString());
        break;

        case "yearDes":
        table.sort(yearDes);
        
        function yearDes(a, b) {
            if (a[0] === b[0]) {
            return 0;
            }else {
            return (a[0] > b[0]) ? -1 : 1;
            }
        }

        console.log(table.toString());
        break;

        default:
            console.log('error');
    }
});

