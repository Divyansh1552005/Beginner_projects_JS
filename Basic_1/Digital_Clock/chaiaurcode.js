let clk = document.getElementById("clock");

setInterval(()=>{let date = new Date();
    clk.innerHTML = date.toLocaleTimeString('en-IN')
} , 1000);




