//--- STORAGE TIMER ---
let start = Date.now(),
    displayer = document.getElementById('timer'),
    displayer2 = document.getElementById('delay'),
    savedStart = sessionStorage.getItem('autosave'),
    localSavedStart = localStorage.getItem('localsave');


if (localSavedStart != null && localSavedStart != start) {
    displayer2.innerHTML = `Sei stato via per ${Math.floor((Date.now() - start)/1000)} secondi`
} else {
    localSavedStart = localStorage.setItem('localsave', start);
}
if (savedStart == null) {
    start = Date.now();
    sessionStorage.setItem('autosave', start);
} else {
    start = savedStart;
}

setInterval(() => {
    let delta = Date.now() - start;
    timer.innerHTML = `Sei connesso da ${Math.floor(delta / 1000)} secondi`;
    sessionStorage.setItem('autosave', start)
}, 1000);

//--- API REQUEST ---

let displayer3 = document.getElementById('api-displayer');

axios.get('https://swapi.dev/api/people/1')
    .then(function (response) {
        let people = response.data;
        displayer3.innerHTML = people.name;
        console.log(people.name);
    })
    .catch(function (error) {
        displayer3.innerHTML = 'Qualcosa è andato storto';
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log('Chiamata eseguita');
    });