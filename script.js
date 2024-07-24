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
const tnameObj  = document.getElementById('tname');

[...cardBtn].forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        console.log(event.target.id);
        tnameObj.innerText = pList[event.target.id]['name'];
    });
})