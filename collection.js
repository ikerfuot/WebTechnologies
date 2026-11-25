// Lista de la coleccion, cada producto tiene name, price y quantity
// Collection list, each product has name, price and quantity
var collection = [];

// Task 3: anade un producto a la lista con la cantidad del campo
// Task 3: adds a product to the list with the quantity of the field
function addToCollection(name, price, quantityId) {
    let quantity = document.getElementById(quantityId).value * 1;
    if (quantity < 1) {
        alert('Please enter a quantity of at least 1.');
        return;
    }
    // Si el producto ya esta en la lista se suman las cantidades
    // If the product is already in the list the quantities are added
    let found = false;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].name === name) {
            collection[i].quantity += quantity;
            found = true;
        }
    }
    if (found === false) {
        collection.push({ name: name, price: price, quantity: quantity });
    }
    showCollection();
}

// Task 3: quita un producto, se crea una lista nueva sin el
// Task 3: removes a product, a new list is built without it
function removeFromCollection(index) {
    let newCollection = [];
    for (let i = 0; i < collection.length; i++) {
        if (i !== index) {
            newCollection.push(collection[i]);
        }
    }
    collection = newCollection;
    showCollection();
}

// Crea una celda de texto y la pone en la fila
// Creates a text cell and puts it in the row
function addCell(row, text) {
    let cell = document.createElement('td');
    cell.textContent = text;
    row.appendChild(cell);
}

// Task 3: dibuja la tabla de la coleccion debajo de los productos
// Task 3: draws the collection table below the products
function showCollection() {
    let box = document.getElementById('collectionList');
    box.innerHTML = '';
    if (collection.length === 0) {
        box.innerHTML = '<p>The collection list is empty.</p>';
        return;
    }
    let table = document.createElement('table');
    table.innerHTML = '<tr><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th></th></tr>';
    let total = 0;
    for (let i = 0; i < collection.length; i++) {
        let item = collection[i];
        // Se suma 0.5 para que un error de decimales no pierda un centimo
        // 0.5 is added so a decimal error does not lose a cent
        let subtotal = Math.trunc(item.price * item.quantity * 100 + 0.5) / 100;
        total += subtotal;
        let row = document.createElement('tr');
        addCell(row, item.name);
        addCell(row, item.price + ' EUR');
        addCell(row, item.quantity);
        addCell(row, subtotal + ' EUR');
        let removeCell = document.createElement('td');
        removeCell.innerHTML = '<button type="button" onclick="removeFromCollection(' + i + ')">Remove</button>';
        row.appendChild(removeCell);
        table.appendChild(row);
    }
    box.appendChild(table);
    let totalText = document.createElement('p');
    totalText.textContent = 'Total: ' + Math.trunc(total * 100 + 0.5) / 100 + ' EUR';
    box.appendChild(totalText);
}
