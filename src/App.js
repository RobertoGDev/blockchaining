import Blockchain from "./Blockchain";
import getInfoApi from './API_inforandom';

let container = document.querySelector('#results')
let form = document.querySelector('form[name="genCoin"]');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let difficulty = document.querySelector("#difficulty").value
    let blocks = document.querySelector("#blocks").value
    let mining = document.querySelector("#mining").value

    getInfoApi().then(info => {

        console.log(info)

        let roakCoin = new Blockchain({
            datos: "Soy el almirante arde tu traje elegante!!"
        }, difficulty, mining, container);

        container.innerHTML = "";
        container.innerHTML += "<div class=''>";


        for (let index = 0; index < blocks; index++) {
            roakCoin.addBlock({
                id: info[index].id,
                name: info[index].name,
                details: info[index].details,
                date_local: info[index].date_local,
                links: info[index].links.article,
            }, mining, container)
        }  
        
        roakCoin.chain.forEach(block => {

            console.log("block index: " + block.index)
            container.innerHTML += `<article class="panel is-info">
            <p class="panel-heading">
            ${block.index === 0 ? 'Bloque Inicial' : 'Bloque' + block.index }
            </p>
            
            ${block.index === 0
                ? '<a class="panel-block"><span class="panel-icon material-icons md-18">east</span> Hash Actual: ' + block.hash + '</a>'
                : '<a class="panel-block"><span class="panel-icon material-icons md-18">north</span> Hash Anterior: ' + block.previousHash + '</a>' +
                '<a class="panel-block"><span class="panel-icon material-icons md-18">east</span> Hash actual: ' + block.hash + '</a>'
            }
            </p>
            </div>
            </article>
            `;
        });
        
        container.innerHTML += `<div class="code"><h2>Código generado</h2><pre>${JSON.stringify(roakCoin, null, 2)}</pre></div>`;
    })
})






