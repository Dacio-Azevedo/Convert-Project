//Cotação de moedas do dia
const USD = 5.75;
const EUR = 6.23;
const GBP = 7.33;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");

// Manipulando o input amount para receber somente numeros.
amount.addEventListener("input",() => {
    
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
    
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch(currency.value){
      case "USD":
        convertCurrency(amount.value, USD, "$");
        break;
      case "EUR":
        convertCurrency(amount.value, EUR, "€");
        break;
      case "GBP":
        convertCurrency(amount.value, GBP, "£");
        break;
    }

});

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
   console.log(amount,price,symbol);
};