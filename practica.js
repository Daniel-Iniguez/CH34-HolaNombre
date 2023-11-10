function changeName(){
    let name = prompt('Cual es tu nombre?');
    const refName = document.getElementById('names');
    refName.innerHTML = `<span class="badge bg-secondary"> Hola ${name}!</span>`;
}
