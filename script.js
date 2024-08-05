const quickListSelector = document.querySelector('.quickList');

// const pList = [
//     'Aaron Ramsdale',
//     'David Raya',
//     'Karl Hein',
//     'William Saliba',
//     'Kieran Tierney',
//     'Ben White',
//     'Gabriel',
//     'Jurrien Timber',
//     'Jakub Kiwior',
//     'Takehiro Tomiyasu',
//     'Oleksandr Zinchenko',
//     'Thomas',
//     'Martin Odegaard',
//     'Smith Rowe',
//     'Jorginho',
//     'Fabio Vieira',
//     'Kai Havertz',
//     'Declan Rice',
//     'Bukayo Saka',
//     'Gabriel Martinelli',
//     'Eddie Nketiah',
//     'Leandro Trossard',
//     'Reiss Nelson'
// ];

const pList =  [
    {
        id: 0,
        name: 'Aaron Ramsdale',
        position: 'Goalkeeper',
    },
    {
        id: 1,
        name: 'David Raya',
        position: 'Goalkeeper',
    },
    {
        id: 2,
        name: 'Karl Hein',
        position: 'Goalkeeper',
    },
    {
        id: 3,
        name: 'William Saliba',
        position: 'Defender',
    },
    {
        id: 4,
        name: 'Kieran Tierney',
        position: 'Defender',
    },
    {
        id: 5,
        name: 'Ben White',
        position: 'Defender',
    },
    {
        id: 6,
        name: 'Gabriel',
        position: 'Defender',
    },
    {
        id: 7,
        name: 'Jurrien Timber',
        position: 'Defender',
    },
    {
        id: 8,
        name: 'Jakub Kiwior',
        position: 'Defender',
    },
    {
        id: 9,
        name: 'Takehiro Tomiyasu',
        position: 'Defender',
    },
    {
        id: 10,
        name: 'Oleksandr Zinchenko',
        position: 'Defender',
    },
    {
        id: 11,
        name: 'Thomas',
        position: 'Midfielder',
    },
    {
        id: 12,
        name: 'Martin Odegaard',
        position: 'Midfielder',
    },
    {
        id: 13,
        name: 'Smith Rowe',
        position: 'Midfielder',
    },
]


pList.forEach((item, index) =>{
    quickListSelector.innerHTML += `<button id=${index} class='btns'>${item['name']}</button>`;
    });

const cardBtn = document.getElementsByClassName('btns');
const forPlayerObj = document.getElementById('forPlayer');
const tnameObj  = document.getElementById('tname');

[...cardBtn].forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        // event.target.style.backgroundColor = "blue";
        forPlayerObj.innerText = pList[event.target.id]['name'];
        tnameObj.innerText = pList[event.target.id]['name'];
    });
})




// const url = "https://en.wikipedia.org/wiki/Arsenal_F.C."

const url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Arsenal%5FF.C."

fetch(url)
  .then(function(response) {
    const response1 = response.json();
    return response1;
  })
  .then(function(response){
    // html_code = response["parse"]["text"]["*"];
    // parser = new DOMParser();
    // html = parser.parseFromString(html_code, "text/html");
    // var tables = html.querySelectorAll(".wikitable");
    console.log(response);
  })
// async function getData() {
// const requestURL = 'https://en.wikipedia.org/wiki/Arsenal_F.C.';
// const request = new Request(requestURL);
// const response = await fetch(request);
// const receivedData = await response.json();

// console.log(receivedData);
// }

// getData();
