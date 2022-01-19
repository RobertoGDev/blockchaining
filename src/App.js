import Blockchain from "./Blockchain";

let container = document.querySelector('#results')

let roakCoin = new Blockchain({
    transactionID: 20719063,
    entity: "Caja rural"    
});

roakCoin.addBlock({
    transactionID: 207191232,
    entity: "Caja Navarra"    
})

roakCoin.addBlock({
    transactionID: 207123522,
    entity: "Caja Sur"    
})

roakCoin.addBlock({
    transactionID: 207123522,
    entity: "BBVA"    
})

roakCoin.addBlock({
    transactionID: 207123522,
    entity: "Santander Central Hispano"    
})


container.innerHTML = `<pre>${JSON.stringify(roakCoin, null, 2)}</pre>`;
