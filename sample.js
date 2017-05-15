
var fs = require('fs');
var Table = require('cli-table');


// TODO: Indentation and formatting


// Read the file

// Split by newline

// Loop and extract the year

// Count and store the number of occurances

// Construct a table and print


fs.readFile('movies.dat', 'utf8', function(err, data) {
    if (err) {
    	return console.log (err);
    }
    var text = data.toString();
    //var sp = text.split("\n");
    //console.log(sp[5]);
    //var array =[];
    //array.push(sp);
   
    //console.log(array);
    var regexp = /\(\d{4}\)/g;
    var regexpm = /::(.*)::/g;
    var array2 = [];
    array2 = text.match(regexp);
    array2.sort();
    var array3 = [];
    array3 = text.match(regexpm);
     

    var a = array2.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })

            
    var table = new Table({
        head: ['YEAR', 'Movies']
    });


 
    for ( i =0 ; i< array2.length ; i++) {
        table.push([
            array2[i],
            array3[i]	
        ]);
    }

   console.log(table.toString());

 });




