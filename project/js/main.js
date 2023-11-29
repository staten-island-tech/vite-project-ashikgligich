import './ash'
import { usAirForceJets } from './menu'



function displayJets(jetz)
{
  jetz.forEach((jet) => {
    document.querySelector(".flex-container").insertAdjacentHTML(
      "afterbegin",
      `<div class="grow" id="grow">
        <div id="animation1">
          <img
            src="${jet.img}"
            alt="F44"
          />
          <h2>${jet.name}</h2>
          <h4>${jet.role}</h4>
          <h6>${jet.maxSpeed,jet.range,jet.payload}</h6>
          <button type="button" class="delete">Delete</button>
        </div>
      </div>`
    )});
    
    var button = document.querySelector('button.delete:not(button.delete[onclick=onButtonClick])');
    var button = document.querySelector('button.delete:not([onclick=onButtonClick])');
    button.addEventListener('click', onButtonClick);
}

displayJets(usAirForceJets);

var button = document.querySelector('button.delete');
button.addEventListener('click', onButtonClick);

function onButtonClick() {
  console.log("button click");
  
  var granyElement = this.parentNode.parentNode;
  //var element = document.getElementById("grow");
  granyElement.remove();
};



var buts = document.querySelectorAll('#myDropdown a.filterz');
console.log(buts);
buts.forEach(item => { item.addEventListener('click', onButtonClick2) });


function onButtonClick2(){
  console.log("button f1")
  var g = document.querySelector(".flex-container")
  g.innerHTML = '';

  console.log(this);
  var planeTypo = this.innerText; 
  

  var fighterz = usAirForceJets.filter(x => x.role.includes(planeTypo));
  displayJets(fighterz);

};

