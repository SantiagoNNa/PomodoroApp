var customTimeInput = document.getElementById('duracion');
var timerDisplay = document.getElementById('time-left');
var timerFree = document.getElementById('descanso');

var timehide = document.getElementById("prodId");
//valor por defecto de 25 minutos
var timeObj = parseSeconds(25*60);
//resetMainTimer(customTimeInput.innerHTML*60);
setTimeOnAllDisplays(timeObj.minutes, timeObj.seconds);
customTimeInput.textContent = 25;

//Valor por defecto 5 minutos de descanso
var Timefree = parseSeconds(5*60);
timerFree.textContent = 5;


$('body').on('click', '#start_stop', function() {
    if( $('#start_stop').val() == "Comenzar"){
        this.value = "Pausar";
        this.innerHTML = " <i class=" +'"fas fa-pause"' + "></i> " + "Pausar";
        startPomodoro(timehide.value);

    }else if ($('#start_stop').val()  == "Pausar"){
        this.value="Comenzar";
        this.innerHTML = " <i class=" +'"fas fa-play"' + "></i> " + "Comenzar";
    };     
});

$('body').on('click', '.up-session' , function(){
    const elem = document.getElementById('duracion').textContent;
    let num = parseInt(elem);
    num = num + 1;
    document.getElementById('duracion').textContent = num;
    let newtime = parseSeconds(num*60);
    setTimeOnAllDisplays(newtime.minutes, newtime.seconds);
})

$('body').on('click','.down-session', function(){
    const elem = document.getElementById('duracion').textContent;
    let num = parseInt(elem);
    num = num -1;
    document.getElementById('duracion').textContent = num;
    let newtime = parseSeconds(num*60);
    setTimeOnAllDisplays(newtime.minutes, newtime.seconds);

})

//Reset a valor por defecto de 25 minutos
$('body').on('click', '#reset' , function(){
    customTimeInput.textContent = 25;
    let timeObj = parseSeconds(25*60);
    setTimeOnAllDisplays(timeObj.minutes, timeObj.seconds);
})


var startPomodoro = function(Time){

    Time.split(":")


};

function setTimeOnAllDisplays(minutes, seconds) {
        if (minutes >= 60) {
                hours = Math.floor(minutes / 60);
                minutes = minutes % 60;
                clockHours = hours + ':'; 
            } else {
                clockHours = '';   
            }
                
        clockMinutes = minutes < 10 ? '0' + minutes : minutes;
        clockMinutes += ':';
        clockSeconds = seconds < 10 ? '0' + seconds : seconds;
        let a =clockHours + clockMinutes + clockSeconds;
        timerDisplay.textContent = clockHours + clockMinutes + clockSeconds;
        timehide.value = a;
}

function parseSeconds(seconds) {
    return {
        'minutes': (seconds / 60) | 0,
        'seconds': (seconds % 60) | 0
    }
}

function resetMainTimer(seconds){


}

        