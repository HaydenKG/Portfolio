var displaycounter = document.getElementById("boxbreathing_counter");
let counter = 0;
let cycle = 0;
let rounds = 0;

setInterval(breathingcycle, 1000);

function breathingcycle() {
        console.log(rounds);    
        if (rounds >= 3) {
                displaycounter.innerHTML = "Finished 3 rounds";
                clearInterval(breathingcycle);
        }

        if (cycle == 16) {
                cycle = 0;
                rounds++;
        }
        
        if (cycle < 4) {
                counter++;
                displaycounter.innerHTML = "In for <br /> &nbsp; &nbsp;" + counter;
        }
        
        if (cycle >= 4 && cycle < 9 || cycle > 11 && cycle < 15)
                displaycounter.innerHTML = "hold it";   
        
        if (cycle > 7 && cycle < 12) {
                displaycounter.innerHTML = "Out for <br /> &nbsp; &ensp;" + counter;
                counter--;
        }
        cycle++;
}