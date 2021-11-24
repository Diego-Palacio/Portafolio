
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
desplegarMenu=()=>{
  document.getElementById("nav").classList.toggle("navv");
}

//cuando se selecciona una seccion se cierra y el btn-menu hace su transicion
seleccionSeccion=()=>{
   var btnMenu=document.getElementById("btn-menu");
   desplegarMenu();
   if(btnMenu.checked==false){
      btnMenu.checked=true;
    }
    else{
      btnMenu.checked=false;
    }
    
}




