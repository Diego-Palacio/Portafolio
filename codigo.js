
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
let total= ancho-200;
var alto= window.innerHeight;
desplegarMenu =()=>{
    
   
    const nav= document.getElementById("nav");
if(!estado){
    nav.style.animation=("aparecer 1s")
    nav.style.marginLeft=total+"px";
    nav.style.height=alto+"px";
    
     estado=true;
}
else{
    nav.style.animation=("desaparecer 1s")
  setTimeout(() => {
        nav.style.marginLeft=ancho+"px";
  }, 800);
    estado=false;
}

}


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
    //#btn-menu:checked 


}




