const fs = require('fs');
//hay 3 tipos de required, el primero es como el que esta arriba que es un required que ya viene preinstalado en node, la segunda es como const express = require('express'); la cual no viene preinstalada en node este es un paquete que se instala y por ultimo estan los required que uno mismo crea y vienen asi const fs = require('./fs');
let listarTabla = (base, limite = 10) => {//gracias al es6 los parametros ya pueden recibir valores
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }
}



//(todo esto lo queremos trabajar en una funcion que devuelva una promesa)
//entonces crear archivo va ser la funcion que nos devolvera la promesa
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {//si no es un numero
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;

        }
        //el primer parametro es el nombre del archivo y tambien se puede poner la direccion o la carpeta donde se van a guardar los archivos, el segundo es el contenido que quiero guardar en este, por ultimo se tiene un callback, donde tiene una condicion que si el archivo no se pudo crear botara un error y si no ps pondra que el archivo se cree
        fs.writeFile(`tablas/tabla-${base}-hasta-el${limite}.txt`, data, (err) => {
            //if (err) throw err; esto lo usabamos cuando el codigo estaba solo pero lo comento por que vamos a crear una funcion que retorna una promesa
            if (err) reject(err);
            else {//el resolve esta esperando el nombre del archivo donde esta el then en app.js
                resolve(`tablas/tabla-${base}-hasta-el${limite}.txt`);
            }
            // console.log('archivo creado!');
        });
    })
}
//el module me permite la comunicacion entre archivos js, ademas que el modulo es un objeto global que esta disponible a lo largo de la aplicacion, entonces en el modulo se ponen los obhetos que yo quiera utilizar de forma global
module.exports = {
    crearArchivo, //es lo mismo que poner crearArchivo: crearArchivo
    listarTabla
}