let appData = {
 
  expenses: { a: 33 , b: 2 , c:3 , ссі:22 },
  
};

    
    


function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}
    
var sample = appData.expenses;
var summed = sum( sample );
console.log( "sum: "+summed );