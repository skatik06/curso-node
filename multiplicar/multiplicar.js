//recquireds para crear archivos de texto
const fs = require('fs'); //fileSystem
const colors = require('colors');



let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log('=============='.green)
        console.log('=============='.green)
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let mult = base * i;
            data += `${base} * ${i} = ${mult}\n`;

        }
        console.log(data);

    })
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject('la base no es un numero: ' + base);
                return;
            }


            let data = '';
            for (let i = 1; i <= limite; i++) {
                let mult = base * i;
                data += `${base} * ${i} = ${mult}\n`;
            }

            //writeFile (nombreArchivo, DatosAImprimir,Callback)
            fs.writeFile(`archivos/tabla-${base}.txt`, `${data}`, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${base}.txt`)
            });
        }) //end promise
}

module.exports = {
    crearArchivo,
    listarTabla
}