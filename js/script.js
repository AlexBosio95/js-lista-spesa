const listaSpesa = [
    'latte', 
    'formaggio',
    'riso',
    'pasta',
    'pane',
    'sedano',
    'patate',
    'yogurt proteico'
];

const listGroup = document.querySelector('.list-group');

// inizializzo il contatore
let i = 0;

// ciclo while
while (i < listaSpesa.length) {
    const newElement = document.createElement('li');
    newElement.classList.add('list-group-item');

    newElement.innerHTML = listaSpesa[i];

    listGroup.append(newElement);

    // avanzamneto del contatore
    i++
}

