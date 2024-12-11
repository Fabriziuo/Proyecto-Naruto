const input = document.querySelector("input");
const button = document.querySelector("button");
const akatsukiContainer = document.querySelector(".akatsuki-container");


button.addEventListener('click', (e) => {
   e.preventDefault();
   traerAkatsuki(input.value);
})


function traerAkatsuki(akatsuki){
   fetch(`https://narutodb.xyz/api/akatsuki/search?name=${akatsuki}`)
   .then((res )=> res.json())
   .then((data) => {
       crearUkatsuki(data)
   });
}



function crearUkatsuki(akatsuki){
    const img = document.createElement("img");
    img.src = akatsuki.images;


    const h3 = document.createElement("div");
    h3.textContent = akatsuki.name;
    
  const h4= document.createElement("div");
    h4.textContent = akatsuki.personal.sex;
    
    const h5= document.createElement("div");
    h5.textContent = akatsuki.debut.manga;
    const h6= document.createElement("div");
    h6.textContent = akatsuki.debut.anime;

    const div = document.createElement("div")
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);


    akatsukiContainer.appendChild(div);
}


