
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
    
    if(ancho<=800){
        desplegarMenu();
    }
    

}


tamañoSecciones=()=>{
   
        /*
        El 40 es del weight del nav
        */ 
         const inicio= document.getElementById("contenedor_inicio");
         const s1= document.getElementById("contenedor_sobremi");
         const s2= document.getElementById("contenedor_sobremi2");
         const s3= document.getElementById("contenedor_contacto");


         inicio.style.height=alto-40+"px";
         s1.style.height=alto+"px";
         s2.style.height=alto+"px";
         s3.style.height=alto+"px";
}

