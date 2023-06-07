
let nombreApellido='';
let institucion='';
let certificado;
let salir=0;
let opcion;

const validacionCertificado = (valor) =>{
    do {
        if (valor >=1 && valor <=4 ) {
            return valor;
        } 
       else{
        opcion = Number(prompt('Su elección es incorrecta vuelva a intentarlo nuevamente:'+ '\n' + '\n' + 'Seleccione el tipo de certificado que desea crear:'+ '\n' +
        '1 - de Graduación' + '\n' +
        '2 - de Reconocimiento' + '\n' +
        '3 - de Participación' + '\n' ));
        opcion= validacionCertificado(opcion);
       }
        return opcion;

    } while (opcion > 3); 
}

const validacionString = (valor) =>{
    do {
        if (valor != '' ) {
            return valor;
        } 
       else{
        valor = prompt('No ha ingresado correctamente los datos'+ '\n' + '\n' +'vuelva a intentarlo: ' );
        valor= validacionString(valor);
       }
        return valor;

    } while (valor == ''); 
}

do {
    alert('Te damos la bienvenida'+ '\n' + '\n' + 'Comienza a crear tu certificado...');
    opcion = parseInt(prompt('Seleccione el tipo de certificado que desea crear:'+ '\n' + '\n' +
    '1 - de Graduación' + '\n' +
    '2 - de Reconocimiento' + '\n' +
    '3 - de Participación' + '\n'));
    opcion= validacionCertificado(opcion);

    switch(opcion) {
    
        case 1:
                certificado= 'CERTIFICADO DE GRADUACIÓN';
                break; 
        case 2:
                certificado= 'RECONOCIMIENTO';
                break; 
        case 3:
                certificado= 'CERTIFICADO DE PARTICIPACIÓN';
                break;
        default:
                console.log('No ha seleccionado ninguna opción de certificados. Tendrá un certificado sin categoría');
    }

    alert('Su selección de certificados es: ' + '\n' + '\n' + certificado + '\n' + '\n'+  'Ahora queda completar una serie de campos:');

    motivo = validacionString(prompt('Ingrese motivo específico del certificado' + '\n' + '\n' + 'Por:'));

    nombreApellido = validacionString(prompt('Ingrese Nombre y Apellido del destinatario: '));

    institucion = validacionString(prompt('Ingrese Nombre de la Institución: '));

    continuar = prompt('Desea continuar con un nuevo certificado? si/no');

    console.log('Terminaste de crear tu Certificado! : ' + '\n'  + '\n' + '---------------------------------'+ '\n' + '\n'+certificado  + '\n'  + '\n' + 'La ' + institucion.toUpperCase()   + '\n'  + '\n' + ' le otorga el presente certificado a '  + '\n'  + '\n' + nombreApellido.toUpperCase() + '\n' + '\n'+ 'por ' + motivo + '\n' + '\n'+ '__________________'+'\n'+ 'Firma '+ '\n'  + '\n' + '---------------------------------' );
   
} while (continuar == 'si');

   

