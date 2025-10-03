const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function displayCurrencies(valutes) {
  itemsContainer.innerHTML = '';

  for (const key in valutes) {
    const valute = valutes[key];
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    itemDiv.innerHTML = `
      <div class="item__code">
        ${valute.CharCode}
      </div>
      <div class="item__value">
        ${valute.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    `;

    itemsContainer.appendChild(itemDiv);
  }
}

const cachedData = localStorage.getItem('currencyRates');
if (cachedData) {
  const valutes = JSON.parse(cachedData);
  displayCurrencies(valutes);
  loader.classList.remove('loader_active');
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const valutes = data.response.Valute;

    localStorage.setItem('currencyRates', JSON.stringify(valutes));
    displayCurrencies(valutes);
    loader.classList.remove('loader_active');
  }
});

xhr.send();
