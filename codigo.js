
let i=0;
const speed=80;
const nombre="Diego Nahuel Palacio";

function escribirNombre() {
const cargarNombre= document.getElementById("nomb").innerHTML+=nombre.charAt(i);
i++;
setTimeout(escribirNombre,speed);
}

escribirNombre();



desplegarMenu =()=>{

  
    const menu= document.getElementById("menujs");
  
    menu.click(function(){
        nav.toogle();
        alert("s")
    })



}

