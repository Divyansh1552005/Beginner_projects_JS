const random_color = () =>{
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let interval_id;

document.querySelector('#start').addEventListener('click', () => {
    if(interval_id == null){
        // if interval_id is null, it means the interval is not running
        // so we can start it
        // Start the interval
        // Set the interval to change the background color every second
        // and assign it to interval_id
        // This will allow us to stop the interval later
        // The interval_id will be used to stop the interval later
    interval_id = setInterval(changeColor, 1000);}
    // If the interval is already running, do nothing
    // This will prevent multiple intervals from being created
    // and will ensure that the background color changes only once every second
    function changeColor(){
    document.querySelector('body').style.backgroundColor = random_color();}
});

document.querySelector('#stop').addEventListener('click', () => {

    // Stop the interval
    clearInterval(interval_id);
    interval_id = null; // Reset the interval_id to null
    // This will prevent the interval from being stopped multiple times
    // and will ensure that the background color changes only once every second
});
