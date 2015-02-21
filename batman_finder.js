var word = prompt("type a word you want me to say");
var array = [];

if(word === "batman"){
    for(i=0;i< 17 ;i++){
        array.push("na");
    }
    array.push("BATMAN!!!");
}
    else{
        while( word !== "batman"){
        word = prompt("cool, but not as cool as batman, are you sure you didn't want to type something awesome? like, maybe....batman?");
        if(word === "batman"){
            for(i=0;i< 17 ;i++){
        array.push("na");
            }
        array.push("BATMAN!!!!");
        }
    }
}

console.log(array[17]);
console.log(array);