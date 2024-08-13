// const pList =  [
//     {
//         id: 0,
//         name: 'Aaron Ramsdale',
//         position: 'Goalkeeper',
//     },
//     {
//         id: 1,
//         name: 'David Raya',
//         position: 'Goalkeeper',
//     },
//     {
//         id: 2,
//         name: 'Karl Hein',
//         position: 'Goalkeeper',
//     },
//     {
//         id: 3,
//         name: 'William Saliba',
//         position: 'Defender',
//     },
//     {
//         id: 4,
//         name: 'Kieran Tierney',
//         position: 'Defender',
//     },
//     {
//         id: 5,
//         name: 'Ben White',
//         position: 'Defender',
//     },
//     {
//         id: 6,
//         name: 'Gabriel',
//         position: 'Defender',
//     },
//     {
//         id: 7,
//         name: 'Jurrien Timber',
//         position: 'Defender',
//     },
//     {
//         id: 8,
//         name: 'Jakub Kiwior',
//         position: 'Defender',
//     },
//     {
//         id: 9,
//         name: 'Takehiro Tomiyasu',
//         position: 'Defender',
//     },
//     {
//         id: 10,
//         name: 'Oleksandr Zinchenko',
//         position: 'Defender',
//     },
//     {
//         id: 11,
//         name: 'Thomas',
//         position: 'Midfielder',
//     },
//     {
//         id: 12,
//         name: 'Martin Odegaard',
//         position: 'Midfielder',
//     },
//     {
//         id: 13,
//         name: 'Smith Rowe',
//         position: 'Midfielder',
//     },
// ]

// pList.forEach((item, index) =>{
//     quickListSelector.innerHTML += `<button id=${index} class='btns'>${item['name']}</button>`;
//     });

let tableDataArray = [];
const response = await getData();

// const recentAddedPara = document.getElementById('recentAdd');

async function getData(){

    const url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Arsenal%5FF.C."
    
    
    return await fetch(url)
            .then(function(response){
                if(!response.ok){ 
                throw new Error(`Response status: ${response.status}`);
                }

                return response.json();
            })
            .then(function(jsonResponse){
                const textFile = jsonResponse["parse"]["text"]["*"];
                const parser = new DOMParser();
                const htmlFromText = parser.parseFromString(textFile, "text/html");
                const tableFinder = htmlFromText.getElementsByClassName("wikitable football-squad");
                // console.log(tableFinder);
                for(let i=0; i<tableFinder.length; i++){
                    // console.log(tableFinder.item(i));
                    const tdCollector = tableFinder.item(i).querySelectorAll('td');
                    for(let j=0; j<tdCollector.length; j++){
                        tableDataArray.push(tdCollector.item(j).innerText);
                    }
                }
            })
        }

// console.log(tableDataArray);

const playersList=[];
let counter = 0;
let x;
for(let i=0; i<(tableDataArray.length/4); i++){
    // console.log(counter);
    x = ["squadNo","position","nation","name"].reduce((a,v) => ({...a,[v]:tableDataArray[counter++]}), {});
    playersList.push(x);
}

const quickListSelector = document.querySelector('.quickList');
const forPlayerObj = document.getElementById('forPlayer');//h1 element, showing player's name
const tNameObj  = document.getElementById('tName'); //player's name in td element
const tSquadNoNo = document.getElementById('tSquadNo');
const tPosition = document.getElementById('tPosition');
const tNation = document.getElementById('tNation');
// console.log(playersList);
playersList.forEach((item,index) => {
    quickListSelector.innerHTML += `<button id=${index} class='btns'>${item["name"]}</button>`;
})

const cardBtn = document.getElementsByClassName('btns'); //btn at the sidebar

[...cardBtn].forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        forPlayerObj.innerText = playersList[event.target.id]['name'];
        tNameObj.innerText = playersList[event.target.id].name;
        tSquadNo.innerText = playersList[event.target.id].squadNo;
        tPosition.innerText = playersList[event.target.id].position;
        tNation.innerText = playersList[event.target.id].nation;
    });
})
