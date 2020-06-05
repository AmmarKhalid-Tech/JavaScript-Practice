//user input search in array
numbers = [10,20,30,40,50,60,70,80,90];
var userInput = prompt("Search Number : ");
found = false;

console.log("Input ="+userInput)

for(a=0;a<numbers.length;a++){
    
    if(numbers[a] == userInput){
         console.log(userInput +"found on index =" +a)
         found = true;
         break;
    }
    
}

if(!found){
    console.log(userInput + " Not found")
}
