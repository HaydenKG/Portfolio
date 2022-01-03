var displaycounter = document.getElementById("boxbreathing_counter");
let counter = 0;
let cycle = 0;
let rounds = 0;
var breathinginterval;

//TODO: smooth scroll maybe with get y pos of element and than scroll to it by..
function start() {
        const yOffset = -200; 
        const y = displaycounter.getBoundingClientRect().top + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        breathingcycle();
        breathinginterval = setInterval(breathingcycle, 1000);
        document.getElementById('shape').className = "shape";
}

//TODO: check if really 3 rounds are over
function breathingcycle() {
        ++cycle;

        if (rounds >= 3) { 
                displaycounter.innerHTML = "Finished 3 rounds";
                clearInterval(breathinginterval);
                document.getElementById('shape').className = "";
                return;
        }

        if (cycle == 16) {
                cycle = 0;
                rounds++;
        }
        
        else if (cycle <= 4) {
                displaycounter.innerHTML = "In for <br /> &nbsp; &nbsp;" + ++counter;
        }
        else if (cycle > 4 && cycle <= 8 || cycle > 12 && cycle < 15)
                displaycounter.innerHTML = "hold it";   
        
        else if (cycle > 8 && cycle < 13) {
                displaycounter.innerHTML = "Out for <br /> &nbsp; &ensp;" + counter--;
        }
}