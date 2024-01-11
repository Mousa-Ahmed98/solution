function* generateTickets(){
    let tips = ["Tip1", "Tip2", "Tip3", "Tip4", "Tip5", "Tip6", "Tip7", "Tip8", "Tip9", "Tip10"];
    for (let tip of tips) {
        yield tip;
    }
}

let ireterator = generateTickets();
let current = ireterator.next();
let interval = setInterval(()=>{
    if(current.done == true)
        {
            clearInterval(interval);
            return;
        }
        console.log(current.value);
        current = ireterator.next();
    }, 100);