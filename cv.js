
async function consultar () {
    let resultado = await fetch ("https://randomuser.me/api/?results=1&gender=female")
                        .then ( Response => Response.json())
                        .then (data => data);
            let _user= resultado.results[0];
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