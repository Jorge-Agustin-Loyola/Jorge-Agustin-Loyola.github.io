let botones = document.querySelectorAll('.btn-expand')
let textos_expandir = document.querySelectorAll('.texto')
let imgchange = document.querySelectorAll('#masMenos')

botones.forEach((elemento,clave)=> {
    elemento.addEventListener('click', ()=>{
        console.log(botones)
        
        textos_expandir[clave].classList.toggle('abrir_cerrar')
        if(textos_expandir[clave].classList.contains('abrir_cerrar')){
            imgchange[clave].src = "/assets/minus.svg";
        }
        else{
            imgchange[clave].src = "/assets/plus.svg"
        }
        
          
    })
    
})


