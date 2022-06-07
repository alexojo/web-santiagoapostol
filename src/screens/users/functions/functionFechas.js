
import React from 'react'

export const FunctionFechaATexto = (fecha) => {
    // Convierte 02-06-2022 a 02 Junio 2022
    try {
        const fechaAux = fecha.substring(0,10);
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const fechaTexto = `${fechaAux.substring(9,10)} ${meses[parseInt(fechaAux.substring(6,7))]} ${fechaAux.substring(0,4)}`

        return fechaTexto
    } catch (error) {
        
    }
    return ""    
}


export const FunctionEdad = (fecha) => {
    // Calcula edad con fecha de nacimiento
    
    try {
        const hoy = new Date();
        const fechaNacimiento = new Date(fecha.substring(0,10).replace('-','/'));
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        console.log( fecha, edad )
        const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if ( diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;           
        } 

        return edad  
    } catch (error) {
    }
    return ""
}
