const paciente = {
    get: (rutpac) => {
        return `SELECT * FROM paciente WHERE rut_num= '${rutpac}'`
    },

    add: (data) =>{
        return `INSERT INTO paciente (nombre,a_pat,a_mat,telefono,rut_num,rut_dig,email)
            VALUES('${data.nombre}','${data.a_pat}','${data.a_mat}','${data.telefono}','${data.rut_num}','${data.rut_dig}','${data.email}')`
    },
}

module.exports = paciente;