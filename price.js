// Task 4: precio con 19% de IVA
// Task 4: price with 19% tax
function getTotalPrice(priceWOTax) {
    let priceWithTax = priceWOTax * 1.19;
    // Se suma 0.5 para redondear al centimo mas cercano
    // 0.5 is added to round to the nearest cent
    return Math.trunc(priceWithTax * 100 + 0.5) / 100;
}

// Task 4: lee el precio sin IVA del campo y muestra los tres valores
// Task 4: reads the price without tax from the field and shows the three values
function showPrices() {
    let priceWOTax = document.getElementById('priceWOTax').value * 1;
    if (priceWOTax <= 0) {
        alert('Please enter a price greater than 0.');
        return;
    }
    let priceWithTax = getTotalPrice(priceWOTax);
    // Se suma 0.5 para que un error de decimales no pierda un centimo
    // 0.5 is added so a decimal error does not lose a cent
    let tax = Math.trunc((priceWithTax - priceWOTax) * 100 + 0.5) / 100;
    document.getElementById('resultWOTax').textContent = priceWOTax + ' EUR';
    document.getElementById('resultTax').textContent = tax + ' EUR';
    document.getElementById('resultWithTax').textContent = priceWithTax + ' EUR';
}
