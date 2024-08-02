//Cotação de moedas do dia
const USD = 5.75;
const EUR = 6.23;
const GBP = 7.33;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// Manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");

});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
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
function convertCurrency(amount, price, symbol) {
    try {

        //Exebindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
        
        let total = amount * price;

        //Verifica se o resultado não é um número.
        if(isNaN(total)){
            return alert("Por favor, digite um valor válido.");
        }

        //Formata o valor total
        total = formatCurrencyBRL(total).replace("R$","");
        
        //Mostra o resultado 
        result.textContent = `${total} Reais`;

        footer.classList.add("show-result");
    } catch (error) {
        console.log(error);
        footer.classList.remove("show-result");
        alert("Não foi possível converter. Tente novamente mais tarde.");
    }
};

//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    //Converte para número, para utilizar o LocaleString e formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}    