
/* Funcion para ir escrbiendo mi nombre letra por letra*/
let i=0;
const speed=80;
const nombre="Diego Nahuel Palacio";

function escribirNombre() {
const cargarNombre= document.getElementById("nomb").innerHTML+=nombre.charAt(i);
i++;
setTimeout(escribirNombre,speed);
}

escribirNombre();

/*Funcion para que al apretar en el icono de menu se despliege los submenu*/
let estado=false;
var ancho = window.innerWidth;
let total= ancho-300;
desplegarMenu =()=>{
 
    const nav= document.getElementById("nav");

if(!estado){
     nav.style.marginLeft=total+"px";
     estado=true;
     alert(total)
    
}
else{
    nav.style.marginLeft="-400px";
    estado=false;
}

}



