//requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`${base} no es un numero`);
            return;
        }

        let dataTable = '';

        for (let i = 0; i < limite; i++) {
            //  console.log(`${base} * ${i} = ${base*i}`);
            dataTable += `${base} * ${i} = ${base*i}\n`;

        }

        const data = new Uint8Array(Buffer.from(dataTable));
        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla${base}.txt`);
        });

    });

}



let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`========= Tabla de ${base}==========`.green);
    console.log('==================='.green);

    for (let i = 0; i < limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}