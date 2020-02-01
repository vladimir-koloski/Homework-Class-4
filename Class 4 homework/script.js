$(document).ready(function (){
$('#btn-show-first-ten').on('click', function(){
        $.ajax({
            url: "https://swapi.co/api/planets/?page=1",
            success: function(data){
                let planets = data.results;
                console.log(planets);
                showStarWarsPlanets(planets);
                document.getElementById("btn-show-next-ten").style.visibility = "visible";
                document.getElementById("btn-show-first-ten").style.visibility = "hidden";
            },
            error: function(error){
                console.log(error);
            }
        })    
    });
  });

  $(document).ready(function (){
    $('#btn-show-next-ten').on('click', function(){
            $.ajax({
                url: "https://swapi.co/api/planets/?page=2",
                success: function(data){
                    let planets = data.results;
                    console.log(planets);
                    showStarWarsPlanets(planets);
                    document.getElementById("btn-show-next-ten").style.visibility = "hidden";
                    document.getElementById("btn-show-first-ten").style.visibility = "visible";
                },
                error: function(error){
                    console.log(error);
                }
            })    
        });
      });
   

function showStarWarsPlanets(planets) {
    let tBody = document.getElementsByTagName('tbody')[0];
    tBody.innerHTML = "";
            for(let i = 0; i < planets.length; i++){
            let tr = document.createElement('tr');
           
            let name = document.createElement('td');
            name.appendChild(document.createTextNode(planets[i].name));
            let population = document.createElement('td');
            population.appendChild(document.createTextNode(planets[i].population));
            let climate = document.createElement('td');
            climate.appendChild(document.createTextNode(planets[i].climate));
            let gravity = document.createElement('td');
            gravity.appendChild(document.createTextNode(planets[i].gravity));
           
            tr.appendChild(name);
            tr.appendChild(population);
            tr.appendChild(climate);
            tr.appendChild(gravity);
            tBody.appendChild(tr);
        };       
};


// // document.getElementById("btn-show-first-ten")
// //         .addEventListener('click', function () {
// //            let xmlHttpRequest = new XMLHttpRequest();
// //            xmlHttpRequest.onload = function () {
// //                let successStatus = xmlHttpRequest.status >= 200
// //                                         && xmlHttpRequest.status < 300;
// //                 if (successStatus) {
// //                     let planets = JSON.parse(xmlHttpRequest.response).results;
// //                     showStarWarsPlanets(planets);
// //                     document.getElementById("btn-show-next-ten").style.visibility = "visible";
// //                     document.getElementById("btn-show-first-ten").style.visibility = "hidden";
// //                 }
// //            } 
// //            xmlHttpRequest.open("GET", "https://swapi.co/api/planets/?page=1");
// //            xmlHttpRequest.send();

           
// //         });
// // function showStarWarsPlanets(planets) {
// //     let tBody = document.getElementsByTagName('tbody')[0];
// //     tBody.innerHTML = "";
// //     console.log(planets);
// //             for(let i = 0; i < planets.length; i++){
// //             let tr = document.createElement('tr');
           
// //             let name = document.createElement('td');
// //             name.appendChild(document.createTextNode(planets[i].name));
// //             let population = document.createElement('td');
// //             population.appendChild(document.createTextNode(planets[i].population));
// //             let climate = document.createElement('td');
// //             climate.appendChild(document.createTextNode(planets[i].climate));
// //             let gravity = document.createElement('td');
// //             gravity.appendChild(document.createTextNode(planets[i].gravity));
           
// //             tr.appendChild(name);
// //             tr.appendChild(population);
// //             tr.appendChild(climate);
// //             tr.appendChild(gravity);
// //             tBody.appendChild(tr);
// //         };       
// // };

// // document.getElementById("btn-show-next-ten")
// //         .addEventListener('click', function () {
// //            let xmlHttpRequest = new XMLHttpRequest();
// //            xmlHttpRequest.onload = function () {
// //                let successStatus = xmlHttpRequest.status >= 200
// //                                         && xmlHttpRequest.status < 300;
// //                 if (successStatus) {
// //                     let planets = JSON.parse(xmlHttpRequest.response).results;
// //                     showStarWarsPlanets(planets);
// //                     document.getElementById("btn-show-next-ten").style.visibility = "hidden";
// //                     document.getElementById("btn-show-first-ten").style.visibility = "visible";
// //                 }
// //            } 
// //            xmlHttpRequest.open("GET", "https://swapi.co/api/planets/?page=2");
// //            xmlHttpRequest.send();
// //         });






// // Task 1
// // Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the 
// //Star Wars api. The information in the table are:

// // Planet Name
// // Population
// // Climate
// // Gravity
// // There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) 
// //There should be a function that prints planets in to the table **API URL: ** https://swapi.co/api/planets/?page=1

// // Task 2
// // After the user clicks the button to get the first 10 planets, a button should be shown below the table 
// //that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and 
// //change the table contents with information about the next 10 planets. 
// //After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. 
// //The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// // **API URL: ** https://swapi.co/api/planets/?page=2