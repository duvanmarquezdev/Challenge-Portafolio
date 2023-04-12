//evento load

window.addEventListener('load', ()=>{
    const form = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        validaCampos();
    })

    const validaCampos = ()=>{
        //Capturar los valores ingresados
        const nombreValor = nombre.value.trim();//con el trim se eliminan espacios en blanco
        const emailValor = email.value.trim();
        const asuntoValor = asunto.value.trim();
        const mensajeValor = mensaje.value.trim();

        //validarNombre
        if(!nombreValor){
            validaFalla(nombre, 'Campo vacio');
        }else{
            validaok(nombre)
        }

        //validarEmail
        if(!emailValor){
            validaFalla(email, 'Campo vacio');
        }else if(!validaEmail(emailValor)){
            validaFalla(email, 'El email no es valido');
        }else{
            validaok(email);
        }

        //validarAsunto
        if(!asuntoValor){
            validaFalla(asunto, 'Campo vacio');
        }else{
            validaok(asunto)
        }

        //validarMensaje
        if(!mensajeValor){
            validaFalla(mensaje, 'Campo vacio');
        }else{
            validaok(mensaje)
        }
    }

    const validaFalla = (input, msje)=>{
        const formControl = input.parentElement
        console.log(formControl)
        const aviso = formControl.querySelector('p');
        aviso.innerText = msje
        formControl.className = 'form-control falla';

    }
    const validaok = (input, msje)=>{
        const formControl = input.parentElement
        formControl.className = 'form-control ok';
    }

    const validaEmail = (email) =>{
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        
    }
})
