let playersName = prompt("Welcome to GC mini-golf! What is your name?");
console.log(playersName);

let numberOfTimes = Number(prompt("Hi, " + playersName + " Would you like to play 3 or 6 holes?"));


if (numberOfTimes === 3 || numberOfTimes === 6) {

    //console.log(numberOfTimes);
    let total = 0;

    const hole = [1, 2, 3, 4, 5, 6]

    for (let i = 0; i < numberOfTimes; i++) {
        let numberOfPutts = Number(prompt("How many putts for hole " + hole[i] + "? "));
        total += numberOfPutts;
    }

    //console.log("Total Par = " + total + ".");

    totalPar = 0;
    if (numberOfTimes === 6) {
        totalPar = (total - 18);
        //alert(totalPar);
    }
    else {
        totalPar = (total - 9)
    }
    if (totalPar > 0) {
       
        alert("Nice try, " + playersName + " Your total par was: +" + totalPar);
        console.log("Nice try, " + playersName + " Your total par was: +" + totalPar);

    }
    else if (totalPar < 0) {
        alert("Great job, " + playersName + " Your total par was: " + totalPar);
        console.log("Great job, " + playersName + " Your total par was: +" + totalPar);
    }
    else {
        alert("Good game, " + playersName + " Your total par was: " + totalPar);
        console.log("Good game, " + playersName + " Your total par was: +" + totalPar);
    }

}
else {
    alert("Try later");
}