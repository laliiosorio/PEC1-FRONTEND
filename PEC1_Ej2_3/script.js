const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencyEl = document.getElementById('currency');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

async function updateCurrency() {
  const storageCurrency = localStorage.getItem('selectedCurrency');
  const actualCurrency = storageCurrency || 'USD';
  const currency = currencyEl.value;

  const rate = await getExchangeRate(actualCurrency, currency);

  // Update ticket prices
  if (rate !== undefined) {
    const ticketPrices = document.querySelectorAll('.movie-container option');

    const updatePricePromises = Array.from(ticketPrices).map(
      async (option, idx) => {
        let originalPrice = Number(option.value);

        if (actualCurrency !== 'USD') {
          const actualCurrencyRate = await getExchangeRate(
            'USD',
            storageCurrency
          );
          originalPrice = originalPrice * actualCurrencyRate;
        }

        const convertedPrice = originalPrice * rate;
        const parts = option.textContent.split('(');
        const newPrice = convertedPrice.toFixed();
        const newPriceText = `${parts[0]}(${newPrice} ${currency})`;

        option.value = newPrice;
        option.innerText = newPriceText;

        if (idx === movieSelect.selectedIndex) {
          localStorage.setItem('selectedMoviePrice', newPrice);
        }
      }
    );

    await Promise.all(updatePricePromises);

    // Update total price
    const selectedSeatsCount = +count.innerText;
    const selectedPrice = +movieSelect.value;

    const totalPrice = selectedSeatsCount * selectedPrice;
    total.innerText = (totalPrice * rate).toFixed();

    // Save currency local storage
    localStorage.setItem('selectedCurrency', currency);
  } else {
    console.error('No se pudo obtener la tasa de cambio.');
  }
}

// Fetch exchange rate from API
async function getExchangeRate(actualCurrency, currencyTo) {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${actualCurrency}`
    );
    const data = await response.json();

    const rate = data.rates[currencyTo];
    return rate;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return undefined;
  }
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  // Set currency from local storage
  const selectedCurrency = localStorage.getItem('selectedCurrency');

  if (selectedCurrency !== null) {
    currencyEl.value = selectedCurrency;
  }

  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
  if (selectedMoviePrice !== null) {
    total.innerText = selectedMoviePrice;
  }
}

// Currency select event
currencyEl.addEventListener('change', () => {
  updateCurrency();
});

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

// Initial currency set
updateCurrency();
