const btnEl = document.getElementById("btn");

const fetchCryptoPrices = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd"
    );
    btnEl.disabled = true;
    const data = await response.json();
    const bitcoinPrice = data.bitcoin.usd;
    const ethereumPrice = data.ethereum.usd;
    const cardanoPrice = data.cardano.usd;
    document.getElementById("bitcoin").innerText = `$${bitcoinPrice}`;
    document.getElementById("ethereum").innerText = `$${ethereumPrice}`;
    document.getElementById("cardano").innerText = `$${cardanoPrice}`;
    btnEl.disabled = false;
  } catch (error) {
    console.error(error);
    btnEl.disabled = false;
    document.getElementById(
      "error"
    ).innerText = `🙄 Something is not right, Please try few minutes later.`;
  }
};

fetchCryptoPrices();

btnEl.addEventListener("click", fetchCryptoPrices);
