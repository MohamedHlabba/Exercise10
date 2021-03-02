
const Btn = document.querySelector('#btn3');
 const div = document.querySelector('#output');
const getCards = () => {
   
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
        method : 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.cards);
        // Output.value = '';
        data.cards.forEach(res=>{
        console.log(res.image);
        const img = document.createElement("img");
        console.log(img)
        img.setAttribute("src",res.image);
        div.appendChild(img);


       
     })

    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}
Btn.addEventListener('click', getCards);



