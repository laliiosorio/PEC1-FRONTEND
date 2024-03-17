const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  // Show waiting message
  rateEl.innerText = 'Fetching exchange rate...';

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
    .catch((error) => {
      // Show error message
      rateEl.innerText = `Error fetching exchange rate. Please try again later. ${error}`;

      rateEl.style.color = 'red';
    });
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);

// Event listener para el input de amount-one
amountEl_one.addEventListener('input', function () {
  console.log(isNaN(amountEl_one.value));
  if (amountEl_one.value < 0) {
    amountEl_one.value = 0;
  }
  calculate();
});

// Event listener para el input de amount-two
amountEl_two.addEventListener('input', function () {
  if (amountEl_two.value < 0) {
    amountEl_two.value = 0;
  }
});

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
