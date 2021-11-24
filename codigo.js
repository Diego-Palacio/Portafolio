
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
desplegarMenu =()=>{
    const nav= document.getElementById("nav");
if(!estado){
  nav.style.transition=1.2+"s";
  nav.style.top=0+"px";
  estado=true;
}
else{
  nav.style.transition=1.2+"s";
  nav.style.top=-100+"%";
  estado=false;
}
}

//cuando se selecciona una seccion se cierra y el btn-menu hace su transicion
seleccionSeccion=()=>{
   var btnMenu=document.getElementById("btn-menu");

    if(ancho<=800){
        desplegarMenu();
        if(btnMenu.checked==false){
            btnMenu.checked=true;
        }
    else{
        btnMenu.checked=false;
    }
    }
  


}




