/*
alert("Mensaje externo");

*/
/*
const nombre = document.querySelector ('#nombre');


async function consultar () {
    let= await fetch ("https://randomuser.me/api/?results=1&gender=female")
                        .then ( Response => Response.json())
                        .then (data => console.log(data));
    
}

consultar ()


fetch('https://randomuser.me/api/?results=1&gender=female')
.then(function (Response) {
        return Response.json ();
})
.then(function (data) {
    for (i=0; i<data.length; i++) {
    document.getElementById ("data").innerHTML +=
    data [i].id + "=>"+ data[i].email+ " "+ data[i].city + "<br/>" }
})
.catch(function (err) {
    console.log(err);
});
const nombre = document.querySelector ('#nombre');


async function consultar () {
    let= await fetch ("https://randomuser.me/api/?results=1&gender=female")
                        .then ( Response => Response.json())
                        .then (data => console.log(data));
    let {dob, location} = data;
    console.log (dob)
    console.log(location)
}

consultar ()

class randomuser{
    constructor (){}
    static fetchFromAPI() {
        let URL= 'https://randomuser.me/api/?results=1&gender=female';
        await fetch (URL)
        .then(response => response.json())
        .then(data=> randomuser.renderUserData(data))
        .catch(error =>alert(error));
    }

    static renderUserData(data){
        console.log(data)
    }

ESTE FUNCIONA
async function consultar () {
    let resultado = await fetch ("https://randomuser.me/api/?results=1&gender=female")
                        .then ( Response => Response.json())
                        .then (data => data);
            console.log(resultado.results[0].dob)

                    }

consultar ()

FUNCIONA
async function consultar () {
    let resultado = await fetch ("https://randomuser.me/api/?results=1&gender=female")
                        .then ( Response => Response.json())
                        .then (data => data);
            /*console.log (resultado.results[0].dob);*/
          /*  let _user= resultado.results[0].dob;
            displayUser(_user);
        }
        function displayUser(_user) {
            let age= document.getElementById('age');
                age.innerText = _user.age;
        } 
   

consultar ()
*/
async function consultar () {
    let resultado = await fetch ("https://randomuser.me/api/?results=1&gender=female")
                        .then ( Response => Response.json())
                        .then (data => data);
            /*console.log (resultado.results[0].dob);*/
            let _user= resultado.results[0];
            //let _location= resultado.results[0].location;
            displayUser(_user);
        

        }
        function displayUser(_user) {
            let country= document.getElementById('country');
                country.innerText =_user.location.country;
            let age= document.getElementById('age');
                age.innerText = _user.dob.age;
            let email= document.getElementById('email');
                email.innerText = _user.email;
            let name= document.getElementById('nombre_perfil');
                name.innerText = _user.name.first+ ' ' +_user.name.last;
        } 
   

consultar ()