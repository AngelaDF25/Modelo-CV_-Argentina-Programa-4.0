/*



alert("Mensaje externo");

*/
const nombre = document.querySelector ('#nombre');

async function consultar () {
    let= await fetch ("https://randomuser.me/api/?results=1&gender=female")
                        .then ( Response => Response.json () )
                        .then (data => console.log(data));
    
}

consultar ()