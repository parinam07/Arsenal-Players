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

const recentAddedPara = document.getElementById('recentAdd');

// const url = "https://en.wikipedia.org/w/api.php?action=parse&formatversion=2&origin=*&prop=text&page=Arsenal%5FF.C.";


// const abc = async fetch(url, {method: 'GET'})
//   .then(function(response) {
//     const response1 = response.json();
//     return response1;
//   })
//   .then(function(response){
//     // console.log(JSON.stringify(response, null, 2));

//     dataContainer = response["parse"]["text"]["*"];
//     // console.log(dataContainer);
//     parser = new DOMParser();
//     html1 = parser.parseFromString(dataContainer, "text/html");
//     // var tables = html1.querySelectorAll("wikitable football-squad");
//     td1 = html1.getElementsByTagName("table");
//     return td1;
//     // td2 = td1.getElementsByClassName("nogrid");
//     // console.log(td1);
//     // console.log(tables[0]);
//   })

// console.log(abc);

const abc = fetch(url)
            .then(function(response){
                return response.json()})
            .then(function(response){
                const textFile = response["parse"]["text"]["*"];
                // console.log(textFile);
                const parser = new DOMParser();
                //parsing response["parse"]["text"]["*"] into html object
                const html1 = parser.parseFromString(textFile, "text/html");
                // console.log(html1);
                //finding all the tables inside the html1
                const tableFinder = html1.getElementsByClassName("wikitable football-squad");
                const thCollector = tableFinder[0].querySelectorAll('th');
                console.log(thCollector);
                // console.log(tableFinder);
                // const finderByClassName = tableFinder[0].childNodes;
                // console.log(finderByClassName);
                // const tablesWithSquadClass = [];
                var counter = 0;
                [...tableFinder].forEach((tableFinderItem)=>{
                    for(const node of tableFinderItem.children){
                        var hasTr = node.querySelector("tr") != null;
                        if(hasTr){
                            const tdGrabber = node.getElementsByTagName("td");
                            // console.log(tdGrabber);
                            for (var i=0; i<tdGrabber.length; i++){
                                // console.log(`${tdGrabber[i].innerText}`);
                            }
                        }
                        // console.log(trGrabber);
                        counter++;
                        // console.log(trGrabber);
                    //     // if(tdGrabber.length>0){
                    //     //     console.log(tdGrabber);
                        }
                    //     console.log(tdGrabber);
                    // }

                    // const html2 = parser.parseFromString(textFile, "text/html");
                    // console.log(html2);
                    // console.log(tableFinderItem.childNodes);

                    // const myTableBody = tableFinderItem.getElementsByTagName("tbody")[0];
                    // console.log(myTableBody.innerHTML);
                    // const allTr = tableFinderItem.querySelectorAll("td");
                    // [...allTr].forEach((item) => console.log(item.innerText));
                    // console.log(allTr);
                    // // const newParser  = parser.parseFromString(tableFinderItem, "text/html");
                    // // const checkClassNameInItem = newParser.getElementsByClassName("squad");
                    // const checkClassNameInItem = tableFinderItem.getElementsByClassName("fn");
                    // counter ++;
                    // // const newParser2 = parser.parseFromString(checkClassNameInItem, "text/HTML");
                    // // console.log(counter,newParser2);
                    // console.log(counter,tableFinderItem.outerHTML);
                    // // console.log(counter,tableFinderItem);
                    // console.log(checkClassNameInItem.outerHTML);
                    // console.log(tableFinderItem.innerHTML);

                    // // console.log(newParser);
                    // // console.log(counter, checkClassNameInItem);

                })
            });