
/*function GeneraForm(){

    let formulario=document.createElement("form");

    let titulo=document.createElement("label");

    let cajaTextNombres=document.createElement("input");

    let cajaTextApellidos=document.createElement("input");

    let cajaTextEmail=document.createElement("input");

    let cajaTextAsunto=document.createElement("input");

    let cajaTextMensaje=document.createElement("textarea");

    let boton=document.createElement("input");

        formulario.setAttribute('method', "post");
        formulario.setAttribute('action', "");
        formulario.setAttribute('style', "width:300px;margin: 0px auto");

        cajaTextNombres.setAttribute('type', "text");
        cajaTextNombres.setAttribute('placeholder', "Nombres");
        cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");

        
        cajaTextApellidos.setAttribute('type', "text");
        cajaTextApellidos.setAttribute('placeholder', "Apellidos");
        cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");

        
        cajaTextEmail.setAttribute('type', "text");
        cajaTextEmail.setAttribute('placeholder', "Email");
        cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");

        
        cajaTextAsunto.setAttribute('type', "text");
        cajaTextAsunto.setAttribute('placeholder', "Asunto");
        cajaTextAsunto.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");

        
        cajaTextMensaje.setAttribute('placeholder', "Mensaje");
        cajaTextMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");

    
        boton.setAttribute('type', "button");
        boton.setAttribute('value', "Enviar");
        boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");
        boton.setAttribute('onclick', "alert('Se envio el mensaje')");

        titulo.innerHTML='<h1>¡Gracias por escribirnos!</h1>';
        formulario.appendChild(titulo);
        formulario.appendChild(cajaTextNombres);
        formulario.appendChild(cajaTextApellidos);
        formulario.appendChild(cajaTextEmail);
        formulario.appendChild(cajaTextAsunto);
        formulario.appendChild(cajaTextMensaje);
        formulario.appendChild(boton);
        document.getElementById('ContentFormulario').appendChild(formulario);
}*/

const { createApp } = Vue
createApp({
    
    data() {

        return {
            errors: [],
            nya: null,
            email: null,
            asunto: null,
            mensaje: null,
        }
    },
    methods: {
        validarFormulario: function (e) {
            if (this.nya && this.email && this.asunto  !== null && this.mensaje) {
                return true;
            }
            this.errors = [];
            if (!this.nya) {
                this.errors.push('Por favor, ingresa tu Nombre y Apellido.');
              }
              if (!this.email) {
                this.errors.push('Por favor, ingresa tu Email.');
              }
              if (!this.asunto) {
                this.errors.push('Por favor, ingresa un Asunto.');
              }
              if (!this.mensaje) {
                this.errors.push('Por favor, ingresa tu Mensaje.');
              }
              e.preventDefault();
        }}
    }
    ).mount('#app')
