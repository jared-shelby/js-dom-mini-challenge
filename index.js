/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header);


/***** Deliverable 2 *****/
header.style.color = "magenta";


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
let profile = document.querySelector("#profile");
profile.children[0].alt = traveler.name;
profile.children[0].src = traveler.photo;
profile.children[1].innerHTML = traveler.name;
profile.children[2].innerHTML = traveler.nickname;


/***** Deliverable 4 *****/
let animalsUL = document.getElementById("animals");
traveler.animalSightings.forEach(animalSighting => {
    let node = document.createElement("li");
    node.setAttribute("data-id", animalSighting.id);
    node.innerHTML = `<p>${animalSighting.description}</p>
    <img src="${animalSighting.photo}" alt="${animalSighting.species}"/>
    <a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species} species!</a>`;
    animalsUL.appendChild(node);
});


/***** Deliverable 5 *****/
document.querySelector("li[data-id='3']").remove();