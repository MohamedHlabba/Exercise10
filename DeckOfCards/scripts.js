
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
       const image = document.createElement("img");
       console.log(image)
       image.setAttribute("src",res.image);
       image.setAttribute("class"," img-fluid") 
       div.appendChild(image);


      
    })

   })
   .catch(error => {
       console.log('fel! ' + error);
   })
}
Btn.addEventListener('click', getCards);

// $(document).ready(function(){
//     $(".fancybox").fancybox({
//           openEffect: "none",
//           closeEffect: "none"
//       });
      
//       $(".zoom").hover(function(){
          
//           $(this).addClass('transition');
//       }, function(){
          
//           $(this).removeClass('transition');
//       });
//   });



