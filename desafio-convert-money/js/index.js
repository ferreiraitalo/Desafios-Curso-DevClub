const button = document.getElementById('main__btn');
const select = document.getElementById('main__select');

const americanDollar = 5.20;
const euro = 5.90;
const bitcoin = 144387.35;

const convertValues = () => {
    const inputReais = document.getElementById('main__input').value;
    const realValue = document.getElementById('text-number-real');
    const currencyValue = document.getElementById('text-number-currency')

    realValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === 'US$ Dólar Americano') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / americanDollar);
    }

    else if (select.value === '€ Euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);
    }

    else {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin);
    }
}

const changeCurrency = () => {
    const nameCurrency = document.getElementById('name-currency');
    const imageCurrency = document.getElementById('image-currency');

    if (select.value === '€ Euro') {
        nameCurrency.innerHTML = 'Euro';
        imageCurrency.src = './img/euro.png';
    }

    else if (select.value === '₿ Bitcoin') {
        nameCurrency.innerHTML = 'Bitcoin';
        imageCurrency.src = './img/bitcoin.png';
    }

    else {
        nameCurrency.innerHTML = 'US$ Dólar Americano';
        imageCurrency.src = './img/estados-unidos.png';
    }

    convertValues();
}

button.addEventListener('click', convertValues);
select.addEventListener('change', changeCurrency);


