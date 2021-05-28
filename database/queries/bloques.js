const bloque = {
    listar: (fecha,idusuario) => {
       return `SELECT * FROM bloque where  CAST(horafin as DATE) = '${fecha}'AND idusuario = ${idusuario} and estado = 0 `
    },

    get: (idbloque) => {
        return `SELECT * FROM bloque WHERE idbloque=${idbloque}`
    },
    
    listar2: 'SELECT * FROM bloque',

    add: (data) => {
        return `UPDATE bloque SET
                modified= now(),
                rutpac='${data.rutpac}',
                estado='${data.estado}' 
                WHERE idbloque = ${data.idbloque}`
    },

    update: (id, estado,rutpac) => {
        return `UPDATE bloque SET estado= '${estado}', rutpac='${rutpac}' WHERE idbloque= '${id}'`
    },

    profesionales: (role) => {
        return `SELECT rutnum, UPPER(CONCAT(nombre,' ',ape_pat,' ', ape_mat)) as nombre from usuario where role = '${role}'`
    } ,

    profesional: (idprof) => {
        return `SELECT rutnum, UPPER(CONCAT(nombre,' ',ape_pat,' ', ape_mat)) as nombre from usuario where rutnum = '${idprof}'`
    },
}

module.exports = bloque;