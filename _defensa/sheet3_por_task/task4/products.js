// Orden actual: true = del mas barato al mas caro
// Current order: true = from the cheapest to the most expensive
var sortAscending = true;

// Devuelve el precio de una tarjeta de producto como numero
// Returns the price of a product card as a number
function getCardPrice(card) {
    return card.querySelector('.amount').textContent * 1;
}

// Task 4: ordena las tarjetas por precio, cada vez que se pulsa cambia el orden
// Task 4: sorts the cards by price, the order changes every time it is clicked
function sortByPrice() {
    let list = document.querySelector('.product-list');
    let cards = list.children;
    let cardArray = [];
    for (let i = 0; i < cards.length; i++) {
        cardArray.push(cards[i]);
    }
    cardArray.sort(function (a, b) {
        if (sortAscending) {
            return getCardPrice(a) - getCardPrice(b);
        }
        return getCardPrice(b) - getCardPrice(a);
    });
    // appendChild mueve la tarjeta al final, asi queda en el nuevo orden
    // appendChild moves the card to the end, so it ends in the new order
    for (let i = 0; i < cardArray.length; i++) {
        list.appendChild(cardArray[i]);
    }
    sortAscending = !sortAscending;
}

// Mira si word esta dentro de text, letra por letra (sin indexOf)
// Checks if word is inside text, letter by letter (no indexOf)
function textHasWord(text, word) {
    for (let start = 0; start + word.length <= text.length; start++) {
        let same = true;
        for (let j = 0; j < word.length; j++) {
            if (text[start + j] !== word[j]) {
                same = false;
                break;
            }
        }
        if (same) {
            return true;
        }
    }
    return false;
}

// Task 4: esconde las tarjetas que no coinciden con la palabra buscada
// Task 4: hides the cards that do not match the searched word
function searchProducts() {
    // Distingue mayusculas y minusculas (Salmon no es salmon)
    // It is case sensitive (Salmon is not salmon)
    let word = document.getElementById('searchWord').value;
    let cards = document.querySelectorAll('.product-list li');
    let found = 0;
    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].querySelector('h3').textContent;
        let description = cards[i].querySelector('.description').textContent;
        if (textHasWord(name + ' ' + description, word)) {
            cards[i].classList.remove('hidden');
            found++;
        } else {
            cards[i].classList.add('hidden');
        }
    }
    let message = document.getElementById('searchMessage');
    if (found === 0) {
        message.textContent = 'No products found for "' + word + '".';
    } else {
        message.textContent = '';
    }
}
