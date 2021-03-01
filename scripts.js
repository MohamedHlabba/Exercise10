
//  const name = document.querySelector('#textname').value;
const Btn = document.querySelector('#btn3');
const Output = document.querySelector('#starwars-output');

const getStartWars = () => {
   
    fetch('https://www.swapi.tech/api/people/?name='+document.querySelector('#textname').value, {
        method : 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        Output.value = '';
        data.result.forEach(res=>{
        console.log(res.properties.height);
            Output.value += "name :" +res.properties.name+ "\n"+"hair :"+res.properties.hair_color+"\n"+"Gender :"+res.properties.gender+"\n"+"Height :"+res.properties.height+"\n"+"Gender :"+res.properties.gender+"\n"+"Mass:"+res.properties.mass;
            
        })
    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}



Btn.addEventListener('click', getStartWars);


