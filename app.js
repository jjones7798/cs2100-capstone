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
    try{
        const response=await fetch(API_URL);

        const data= await response.json();

        console.log("Raw API Data:");
        console.log(data);
       
        const cryptoList= data.map(coin=> new Crypto(coin));
        console.log("Modeled Crypto Data:")
        console.log(cryptoList);
    } 
    catch (error) {
    console.error("Error fetching crypto data:", error);

    }
}

fetchCryptoData();
