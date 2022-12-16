import EventEmitter from "eventemitter3";
import image from "../images/planet.svg";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
_loading=document.createElement('progress');
    _load=async function(){
    const call=await fetch('https://swapi.boom.dev/api/planets');
     const planets=await call.response;
      planets=planets.results;
      
    };
    _create=(items)=>{
      const box=document.createElement('fieldset');
    items.forEach(elem=>{
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = this._render({
      name: elem.name,
      terrain:elem.terrain ,
      population: elem.population,
    });
    
    })
    };
    _startLoading=()=>{};
    _stopLoading=()=>{};
    

    document.body.querySelector(".main").appendChild(box);


    this.emit(Application.events.READY);
  }
   _render({ name, terrain, population }) {
    return `
<article class="media">
  <div class="media-left">
    <figure class="image is-64x64">
      <img src="${image}" alt="planet">
    </figure>
  </div>
  <div class="media-content">
    <div class="content">
    <h4>${name}</h4>
      <p>
        <span class="tag">${terrain}</span> <span class="tag">${population}</span>
        <br>
      </p>
    </div>
  </div>
</article>
    `;
  }

}
