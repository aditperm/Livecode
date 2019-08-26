//exercise3
function addTitle (name1, name2, name3, name4) {
  console.log('Mr.' + name1 + ',' + 'Mr.' + name2 + ',' + 'Mr.' + name3 + ',' + 'Mr.' + name4 );
}

addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard');


function chageSpaceWith(str, to){
return (str.split(' ').join(to))   
  }
chageSpaceWith("kazuya mishima", '+');




function cutString(str){
var a = ' mr.';
    var b = ',';
    var tampung = [];
    for ( var i = 0; i < 6; i++){
        var c = str[i];
        tampung.push(c);
    }  
    console.log(tampung);
  }
  
  cutString("kazuya mishima");
  cutString('sergei dragunov');
  cutString('sasuke uchiha')
}