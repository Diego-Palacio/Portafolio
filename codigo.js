

let i=0;
const speed=80;
const nombre="Diego Nahuel Palacio";

function escribirNombre() {
const cargarNombre= document.getElementById("nomb").innerHTML+=nombre.charAt(i);
i++;
setTimeout(escribirNombre,speed);
}

escribirNombre();


let estado=false;
desplegarMenu =()=>{
 
    const nav= document.getElementById("nav");

if(!estado){
     nav.style.marginLeft="0px";
     estado=true;
}
else{
    nav.style.marginLeft="-200px";
    estado=false;
}

   
    
}



