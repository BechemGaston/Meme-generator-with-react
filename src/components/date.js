const now = new Date().getHours()
const person = 'Jane';

function greeting(){
    if(now <= 11){
        console.log("Good Morning " + person + " " +  now)
    } else if(now >= 12){
        console.log("Good afternoon " + person + " " + now)
    } else if (now >= 19){
        console.log("Good evening " + person + " " + now)
    } else {
        console.log("Good night " +  person + " " +  now)
    }
}

greeting()