"use strict";

const mssql = require('mssql');
const config = require('../../config');
const bluebird = require('bluebird');

module.exports = class DatosSql {
    constructor(pais){
        this.pais = pais;
    }

    connect() {
        mssql.on("error", err => {
            console.dir(err);
            mssql.close();
        });

        const connectionString = config.sql[this.pais.toUpperCase()];

        return mssql.connect(connectionString);
    }

    async execStoreProcedure(storeProcedure) {        
        return new bluebird((resolve, reject) => {
            let exec = this.connect().then(pool => { return pool.request().execute(storeProcedure); });
            exec.then(result => {
                mssql.close();
                resolve(result.recordset);
            }).catch(err => {
                console.log(err);
                mssql.close();
                reject(err);
            });
        });
    }

    async listaFiltros() {
        return await this.execStoreProcedure("[dbo].[BuscadorFiltros_Lista]");
    }
}