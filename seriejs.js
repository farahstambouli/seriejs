//exercice1
function test(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
        if(arr[i]===true){
            sum++
        }
    }return sum
}
//exercice2

     function test(){
        const num = parseInt(prompt('Enter un nembre entre 100 et 999 '));
        var ch1 = Math.floor(num/100) ;
        var ch2 = Math.floor((num%100)/10) ;
        var ch3 = num % 10 ;
        var sum=ch1+ch2+ch3;
        
        if(sum %2==0){
            var res
            return res=sum*sum;
          }else {
             return res=Math.sqrt(sum)  
          }
        
     }
/*
      function test(){
        const num = parseInt(prompt('Enter un nembre entre 100 et 999 '));
        var str=num.toString();
        var spl=str.split("");
        var arr=0
        for (var i=0; i<spl.length;i++){
            arr=arr+Number(spl[i]);
        return arr
      
      }
    }

      for (var i=0; i<arr.length;i++){
        arr=parseInt(spl[i]);
        s+= (arr[i]) 
    } return s

      var s =0 
      for (var i=0; i<arr.length;i++){
          s+= (arr[i]) 
      } return s

      for(var i=0;i<spl.length;i++){
        sum=sum+(spl[i]);
        return sum;
       
        var arr=parseInt(spl);
        return arr


    }
*/

//exercice3
function date(){
    var jour = parseInt(prompt("Entrez le jour (DD) :"));
    var mois = parseInt(prompt("Entrez le mois (MM) :"));
    var annee = parseInt(prompt("Entrez l'année (YYYY) :"));
    var joursRestants
    switch (mois) {
        case 1: // Janvier
        case 3: // Mars
        case 5: // Mai
        case 7: // Juillet
        case 8: // Août
        case 10: // Octobre
        case 12: // Décembre
        joursRestants=31-jour
        break;
        case 4: // Avril
        case 6: // Juin
        case 9: // Septembre
        case 11: // Novembre
       joursRestants=30-jour
       break;
            case 2: //fevrier
            if((annee%4==0 && annee%100!=0)|| (annee%400==0)){
                joursRestants=(29-jour);
            }else {
               joursRestants=(28-jour);
            }
            break;
         default: return 'veuillez verifier la date  '   
     }
     console.log(jour + '-' + mois + '-' + annee + ', il reste ' + joursRestants + ' jours dans le mois.');

}

//exercice4
//the rest parameter syntax allows a function to accept an indefinite number of arguments as an array
/*/The arguments object in JavaScript is a local variable available within all functions. It provides
 a way to access all the arguments passed to a function, regardless of the number of parameters 
specified in the function declaration. It allows you to work with variable numbers of arguments within a function.*/
function test() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        result = result.concat(arguments[i]);
    }
    return result;
}


//exercice 5
function test(num){
    let a = Math.floor(num / 2);
    let b = num - a;
    let c = [];
    c.push(a, b);
    return c;
}

//exercice 6

function test(number) {
    const errors = [
        "101",
        "Check the fan: e1",
        "Emergency stop: e2",
        "Pump Error: e3",
        "c: e4",
        "Temperature Sensor Error: e5"
    ];

    return errors[number] || "101";
}


