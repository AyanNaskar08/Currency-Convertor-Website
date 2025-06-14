const amountInput = document.querySelector('#amount');
const fromCurrency = document.querySelector('#from-currency');
const toCurrency = document.querySelector('#to-currency');
const convertBtn = document.querySelector('.btn-solid');
const convertedAmountField = document.querySelector('#converted-amount');

const API_KEY = '              ';//here write your own api key

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;//here i used exchange rates api

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.result === "success") {
        const rate = data.conversion_rates[to];
        const converted = amount * rate;
        convertedAmountField.value = converted.toFixed(2);
      } else {
        convertedAmountField.value = 'Error';
      }
    })
    .catch(err => {
      console.error('API error:', err);
      convertedAmountField.value = 'API Error';
    });
});


const apiKey = "               ";//here write your own api key from exchange rates api
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const rates = data.conversion_rates;

    const selectedCurrencies = ["EUR", "INR", "GBP", "JPY", "AUD", "CAD", "CNY", "ZAR"];
    const labels = selectedCurrencies;
    const values = selectedCurrencies.map(currency => rates[currency]);

    const ctx = document.getElementById("liveRatesChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Exchange Rate (vs USD)",
          data: values,
          backgroundColor: "#163300",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Live Exchange Rates Compared to USD",
            color: "#0d4903",
            font: {
              size: 18,
              family: "Funnel Display"
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  })
  .catch(error => {
    console.error("Error fetching exchange rates:", error);
  });

