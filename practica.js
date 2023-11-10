function changeName(){
    let getName = document.getElementById('floatingInputGrid');
    let name= getName.value;
    const refName = document.getElementById('names');
    refName.innerHTML = `<span class="badge bg-secondary"> Hola Bienvenido ${name}!</span>`;
}
