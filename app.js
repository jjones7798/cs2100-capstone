let allCryptos=[];

const API_URL=
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1";

class Crypto{
    constructor(coin) {
        this.name=coin.name;
        this.symbol=coin.symbol.toUpperCase();
        this.price=coin.current_price;
        this.marketCap=coin.market_cap;
        this.image=coin.image;
    }
}
async function fetchCryptoData(){
    allCryptos=data.map(coin=> new Crypto(coin));

    renderCryptos(allCryptos);
    try{
        const response=await fetch(API_URL);

        const data= await response.json();

        console.log("Raw API Data:");
        console.log(data);
       
        const cryptoList= data.map(coin=> new Crypto(coin));
        console.log("Modeled Crypto Data:")
        RenderCryptos(cryptoList);
    } 
    catch (error) {
    console.error("Error fetching crypto data:", error);

    }
}

fetchCryptoData();

function renderCryptos(cryptoList){
    const container= document.getElementById("cyrpto-container");
    container.innerHTML="";

    const fragment= document.createDocumentFragment();

    cryptoList.forEach(crypto => {
      const card= document.createElement("div");
      card.classList.add("crypto-card");
      const name=document.createElement("h2");
      name.textContent = crypto.name;

      const symbol= document.createElement("p");
      symbol.textContent= 'Price: $${crypto.price}';


      card.appendChild(name);
      card.appendChild(symbol);
      card.appendChild(price);
       
      fragment.appendChild(card);
    });

    container.appendChild(fragment);

}
const searchInput=
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const searchTerm=
    searchInput.value.toLowerCase

    const filteredCryptos=
    allCryptos.filter(crypto=>
        crypto.name.toLowerCase().includes(searchTerm)
    );

    renderCryptos(filteredCryptos);
})