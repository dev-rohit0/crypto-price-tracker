
                
function CheckPrice() {
                    
                    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcvs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        BTC.innerHTML = "$"+(data['bitcoin']['usd']).toLocaleString();
        console.log(data['bitcoin']['usd']);
                        
    });
                    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethervs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        ETH.innerHTML = "$"+(data['ethereum']['usd']).toLocaleString();
    console.log(data['ethereum']['usd']);
    
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    SOL.innerHTML = "$"+(data['solana']['usd']).toLocaleString();
    console.log(data['solana']['usd']);
    
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=aave&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    AAVE.innerHTML = "$"+(data['aave']['usd']).toLocaleString();
    console.log(data['aave']['usd']);
    
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    DOGE.innerHTML = "$"+(data['dogecoin']['usd']).toLocaleString();
    console.log(data['dogecoin']['usd']);
    
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    DOT.innerHTML = "$"+(data['polkadot']['usd']).toLocaleString();
    console.log(data['polkadot']['usd']);
    
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=decentraland&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    MANA.innerHTML = "$"+(data['decentraland']['usd']).toLocaleString();
    console.log(data['decentraland']['usd']);
    
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=enjincoin&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    ENJ.innerHTML = "$"+(data['enjincoin']['usd']).toLocaleString();
    console.log(data['enjincoin']['usd']);
    
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd')
.then(response => response.json())
.then(data =>{
    XTZ.innerHTML = "$"+data['tezos']['usd'].toLocaleString();
    console.log(data['tezos']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd')
.then(response => response.json())
.then(data =>{
    LINK.innerHTML = "$"+data['chainlink']['usd'].toLocaleString();
    console.log(data['chainlink']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
.then(response => response.json())
.then(data =>{
    BNB.innerHTML = "$"+data['binancecoin']['usd'].toLocaleString();
    console.log(data['binancecoin']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=helium&vs_currencies=usd')
.then(response => response.json())
.then(data =>{
    HNT.innerHTML = "$"+data['helium']['usd'].toLocaleString();
    console.log(data['helium']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=fantom&vs_currencies=usd')
.then(response => response.json())
.then(data =>{
    FTM.innerHTML = "$"+data['fantom']['usd'].toLocaleString();
    console.log(data['fantom']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd')
.then(response => response.json())
.then(data =>{
    ADA.innerHTML = "$"+data['cardano']['usd'].toLocaleString();
    console.log(data['cardano']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    XRP.innerHTML = "$"+(data['ripple']['usd']).toLocaleString();
    console.log(data['ripple']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=uniswap&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    UNI.innerHTML = "$"+(data['uniswap']['usd']).toLocaleString();
    console.log(data['uniswap']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    USDT.innerHTML = "$"+(data['tether']['usd']).toLocaleString();
    console.log(data['tether']['usd']);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=maker&vs_currencies=usd')
.then(response => response.json())
.then(data => {
    MKR.innerHTML = "$"+(data['maker']['usd']).toLocaleString();
    console.log(data['maker']['usd']);
});

}
CheckPrice();
setInterval(CheckPrice,60000);
