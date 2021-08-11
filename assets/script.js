
//Init map function to display map plus markers
function initMap() {
  //map options
  var options = {
    zoom: 10,
    center: { lat: 39.7047, lng: -105.0814 },
  };
  //new map
  var map = new google.maps.Map(document.getElementById("map"), options);

  //new marker
  var marker = new google.maps.Marker({
    position: { lat: 39.7273336, lng: -105.0535381 },
    map: map,
    label: { color: 'black', fontWeight: 'bold', fontSize: '8px', text: 'Brewery' }
  });

  // var infoWindow = new google.maps.infoWindow({
  //   content: '<h1>Fresh State Bev Co</h1>'
  // });

  // marker.addEventListener('click', function(){
  //   infoWindow.open(map, marker);
  // })

  var marker1 = new google.maps.Marker({
    position: { lat: 39.734572, lng: -104.9618063 },
    map: map,
    label: { color: 'black', fontWeight: 'bold', fontSize: '8px', text: 'Sales' }
  });

  // var infoWindow = new google.maps.infoWindow({
  //   content: '<h1>Fresh State Bev Co</h1>'
  // });

  var marker2 = new google.maps.Marker({
    position: { lat: 39.6964946, lng: -104.9496032 },
    map: map,
    label: { color: 'black', fontWeight: 'bold', fontSize: '8px', text: 'Office' }
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

// document.getElementById("form-submission").addEventListener("click", sendEmail);

//run submit form function
// function submitForm(event) {
//   event.preventDefault();
//   //get input values
//   let name = document.querySelectorAll(".name").value;
//   let email = document.querySelectorAll(".email").value;
//   let message = document.querySelectorAll(".message").value;

//   saveContactInfo(name, email, message);

//   document.querySelectorAll("form-submission").requestFullscreen();

//   sendEmail(name, email, message);
// }

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
//  function sendEmail(name, email, message){
// Email.send({
//   Host: "smtp.gmail.com",
//   Username: 'freshstatebev@gmail.com',
//   Password: "Fresh$tate99",
//   To: 'freshstatebev@gmail.com',
//   From: 'freshstatebev@gmail.com',

//   Subject: `${name} sent you a message`,
//   Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
// }) .then((message) => alert("Message Sent Successfully"))

//  }


// Cocktail Api Starts Here

// API https://www.thecocktaildb.com/api/json/v1/1/random.php

console.log('Connected!');
// $("#recipe").hide();
$("footer").hide();
$("#recipe-card").hide();

$(document).ready(function() {
   

// generate random cocktail on button click
    $('#generate').click(function() {  

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(function(response) {
            console.log(response.data.drinks[0]);            

            $("#drink-name").html('<h2>' + response.data.drinks[0]["strDrink"] + '</h2>');   
            $("#image").html('<img src=' + response.data.drinks[0]["strDrinkThumb"] + '></img>');
            $("#category").html("<p id='category-info'><strong>Category:</strong> " + response.data.drinks[0]["strCategory"] + '</p>');
            $("#type").html("<p><strong>Type:</strong> " + response.data.drinks[0]["strAlcoholic"] + '</p>');
          
            $("#recipe").show();
            
            $("#instructions").html('<p>' + response.data.drinks[0]["strInstructions"] +'</p>');
            $("#recipe-card").show();
            $("footer").show();
            

        });
    });


});

//Reset scroll top

history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// function generateDots() {
//   var slides = document.getElementsByClassName("mySlides");
//   console.log(slides);
//   const dotsContainer = document.getElementById("getDots");
//   for (let i = 0; i < slides.length; i++) {
//     let dotEl = document.createElement("span");
//     console.log(dotEl);
//     dotEl.setAttribute("class", "dot");
//     dotEl.addEventListener("onclick", currentSlide(i + 1));
//     dotsContainer.append(dotEl);
//   }
// }

// Cocktail Api Starts Here

