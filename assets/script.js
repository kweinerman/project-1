//Init map function to display map plus markers
function initMap(){
  //map options
var options = {
  zoom:10,
  center:{lat:39.7047,lng:-105.0814}
}
//new map
var map = new google.maps.Map(document.getElementById('map'), options)




//new marker
var marker = new google.maps.Marker({
  position:{lat:39.7273336,lng:-105.0535381},
  map:map

});

// var infoWindow = new google.maps.infoWindow({
//   content: '<h1>Fresh State Bev Co</h1>'
// });

// marker.addEventListener('click', function(){
//   infoWindow.open(map, marker);
// })


var marker1 = new google.maps.Marker({
  position:{lat:39.734572,lng:-104.9618063},
  map:map
  
});

// var infoWindow = new google.maps.infoWindow({
//   content: '<h1>Fresh State Bev Co</h1>'
// });

var marker2 = new google.maps.Marker({
  position:{lat:39.6964946,lng:-104.9496032},
  map:map
  
});

var marker3 = new google.maps.Marker({
  position:{lat:39.6964946,lng:-104.9496032},
  map:map
  
});
}



// Contact Form Mailer
// Your web app's Firebase configuration
//   For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCNwjSzzIbkbNncKLvY6OCxoPxxIHwhmgM",
//     authDomain: "freshstate-85fbf.firebaseapp.com",
//     projectId: "freshstate-85fbf",
//     storageBucket: "freshstate-85fbf.appspot.com",
//     messagingSenderId: "578118481416",
//     appId: "1:578118481416:web:bcdc4164716e75064583bd",
//     measurementId: "G-ZTCPWKX022"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// // reference contactInfo collection
// let contactInfo = firebase.database().ref("infos")

// Listen for a submit

document.getElementById("form-submission").addEventListener("click", sendEmail);



//run submit form function 
function submitForm(event) {
  event.preventDefault();
  //get input values
  let name = document.querySelectorAll(".name").value;
  let email = document.querySelectorAll(".email").value;
  let message = document.querySelectorAll(".message").value;

  saveContactInfo(name, email, message);

  document.querySelectorAll("form-submission").requestFullscreen();

  sendEmail(name, email, message);
}

// function saveContactInfo(name, email, message) {
//   let newContactInfo = contactInfo.push();

//   newContactInfo.set({
//     name: name,
//     email: email,
//     message:message
//   });

//   retreiveInfo()
// }

// Retrive Info
// function retrieveInfo(){
//   let ref = firebase.database().ref("info");
//   ref.on("value", gotData);
// }

// function gotData(data){
//   let info =data.val();
//   let keys = Object.keys(info);

//   for (let i = 0; i < keys.length; i++) {
//     let infoData = keys[i];
//     let name = info[infoData].name;
//     let email = info[infoData].email;
//     let message = info[infoData].message;
//     console.log(name, email, message);

//     let infosResults = document.querySelectorAll(".infosResults")

//     infosResults.innerHTML += `<div>
//     <p><strong>Name: <strong/>${name}<br/>
//     <a><strong>Email: <strong/>${email}</a> <br/>
//     <a><strong>Message: <strong/>${message}</a> 
//     </p>
//     </div>`
    
//   }
// }

// retrieveInfo();


// Send Email info function
 function sendEmail(name, email, message){
Email.send({
  Host: "smtp.gmail.com",
  Username: 'freshstatebev@gmail.com',
  Password: "Fresh$tate99",
  To: 'freshstatebev@gmail.com',
  From: 'freshstatebev@gmail.com',

  Subject: `${name} sent you a message`,
  Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
}) .then((message) => alert("Message Sent Successfully"))

 }


 function getRandomCocktail(){
  fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
 }

 function getRandomCocktail(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
      
        displayRandomCocktail(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
 }

 getRandomCocktail();

 function displayRandomCocktail(cocktail){
   console.log(cocktail.drinks[0]);
   let drinkSection = document.getElementById('random-cocktail');

   let drinkName = document.createElement('h2');
   
   drinkName.innerHTML = cocktail.drinks[0].strDrink;

   drinkSection.appendChild(drinkName);

   let img = document.createElement('img')
   img.src = cocktail.drinks[0].strDrinkThumb

   drinkSection.appendChild(img);

   for (let i=1; i<16; i++) {

    if(cocktail.drinks[0][`strIngredient${i}`] == null || cocktail.drinks[0][`strIngredient${i}`] == '' ){
      break;
    }
 
  
  let ingredient = document.createElement('ons-list-item');
  ingredient.innerHTML = cocktail.drinks[0][`strIngredient${i}`] + ':' + cocktail.drinks[0][`strMeasure${i}`]

  drinkSection.appendChild(ingredient);
   }

   let card = document.createElement('ons-card');
   card.innerHTML = cocktail.drinks[0].strInstructions;

   drinkSection.appendChild(card);
}
