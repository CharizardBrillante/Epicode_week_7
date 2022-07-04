//-------------------------------------- CLASSES --------------------------------------
class User {
    constructor(name, surname, birth) {
        this.name = name;
        this.surname = surname;
        this.birth = birth;
    }

    getName() { return this.name; }
    getSurname() { return this.surname; }
    getAge() {
        console.log(this.birth);
        return Math.floor((Date.now() - Date.parse(this.birth)) / 31557600000);     
    }

}

//------------------------------------ VARIABLES --------------------------------------
let form = document.getElementById('form'),
    submit = document.getElementById('submit'),
    displayer = document.getElementById('displayer');

//------------------------------------ EVENTS --------------------------------------
//Prevent refresh
form.addEventListener('submit', (event)=>{
    event.preventDefault();
});

//fill the grid with users data
submit.addEventListener('click', ()=>{
    //get input values and create grid cells
    let name = document.getElementById('name').value,
        surname = document.getElementById('surname').value,
        birthDate = document.getElementById('birthdate').value,
        user = new User(name, surname, birthDate),
        row = document.createElement('div'),
        col1 = document.createElement('div'),
        col2 = document.createElement('div'),
        col3 = document.createElement('div');
    //format grid cells with Bootstrap classes
    row.classList.add('row', 'border', 'border-dark');
    col1.classList.add('col-4');
    col2.classList.add('col-4');
    col3.classList.add('col-4');
    displayer.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    //fill the grid with user data
    col1.innerHTML = user.getName();
    col2.innerHTML = user.getSurname();
    col3.innerHTML = user.getAge();

});