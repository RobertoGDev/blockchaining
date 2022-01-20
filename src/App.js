import Blockchain from "./Blockchain";

let container = document.querySelector('#results')
let form = document.querySelector('form[name="genCoin"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let difficulty = document.querySelector("#difficulty").value
    let blocks = document.querySelector("#blocks").value

    let roakCoin = new Blockchain({
        transactionID: Math.floor(Math.random() * (999999999 - 111111111)) + 111111111,
        entity: "BBVA",
        concept: "Drogas"
    }, difficulty, mining, container);

    for (let index = 0; index < blocks; index++) {
        roakCoin.addBlock({
            transactionID: Math.floor(Math.random() * (999999999 - 111111111)) + 111111111,
            entity: "Caja Navarra",
            concept: "Armas"
        }, mining, container)
    }

    console.log(roakCoin.isValid());
    container.innerHTML = "";
    container.innerHTML = `<pre>${JSON.stringify(roakCoin, null, 2)}</pre>`;
})






