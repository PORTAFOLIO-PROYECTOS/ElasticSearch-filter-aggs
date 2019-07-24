"use strict";

module.exports = class ElasticsearchQuerys {
    constructor() {

    }

    buscador() {
        return {
            "textoBusqueda": "",
            "filtros": [
                {
                    "nombreGrupo": "probando"
                },
                {
                    "nombreGrupo": "otra vez"
                }
            ],
            "filtrosSQL": [
                {
                    "FiltroSeccion": "Categorías",
                    "CampoES": "categorias.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 1,
                    "IdPadre": null,
                    "Tipo": "last-inclusive-level",
                    "FiltroNombre": "Fragancias",
                    "Codigo": "cat-fragancia",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Categorías",
                    "CampoES": "categorias.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 2,
                    "IdPadre": null,
                    "Tipo": "last-inclusive-level",
                    "FiltroNombre": "Maquillaje",
                    "Codigo": "cat-maquillaje",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Categorías",
                    "CampoES": "categorias.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 3,
                    "IdPadre": null,
                    "Tipo": "last-inclusive-level",
                    "FiltroNombre": "Cuidado Personal",
                    "Codigo": "cat-cuidado-personal",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Categorías",
                    "CampoES": "categorias.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 4,
                    "IdPadre": null,
                    "Tipo": "last-inclusive-level",
                    "FiltroNombre": "Tratamiento Facial",
                    "Codigo": "cat-tratamiento-facial",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Categorías",
                    "CampoES": "categorias.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 5,
                    "IdPadre": null,
                    "Tipo": "last-inclusive-level",
                    "FiltroNombre": "Bijouterie",
                    "Codigo": "cat-bijouterie",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Categorías",
                    "CampoES": "categorias.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 6,
                    "IdPadre": null,
                    "Tipo": "last-inclusive-level",
                    "FiltroNombre": "Moda",
                    "Codigo": "cat-moda",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Marcas",
                    "CampoES": "marcas.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 8,
                    "IdPadre": null,
                    "Tipo": "inclusive",
                    "FiltroNombre": "Ésika",
                    "Codigo": "mar-esika",
                    "ValorMinimo": "0",
                    "ValorMaximo": "0"
                },
                {
                    "FiltroSeccion": "Marcas",
                    "CampoES": "marcas.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 9,
                    "IdPadre": null,
                    "Tipo": "inclusive",
                    "FiltroNombre": "L'Bel",
                    "Codigo": "mar-lbel",
                    "ValorMinimo": "0",
                    "ValorMaximo": "0"
                },
                {
                    "FiltroSeccion": "Marcas",
                    "CampoES": "marcas.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 10,
                    "IdPadre": null,
                    "Tipo": "inclusive",
                    "FiltroNombre": "Cyzone",
                    "Codigo": "mar-cyzone",
                    "ValorMinimo": "0",
                    "ValorMaximo": "0"
                },
                {
                    "FiltroSeccion": "Precios",
                    "CampoES": "precio",
                    "TipoOperadorES": "range",
                    "idFiltroBuscador": 11,
                    "IdPadre": null,
                    "Tipo": "inclusive",
                    "FiltroNombre": "Hasta S/. 30.00",
                    "Codigo": "pre-0-30",
                    "ValorMinimo": "0",
                    "ValorMaximo": "30.01"
                },
                {
                    "FiltroSeccion": "Precios",
                    "CampoES": "precio",
                    "TipoOperadorES": "range",
                    "idFiltroBuscador": 12,
                    "IdPadre": null,
                    "Tipo": "inclusive",
                    "FiltroNombre": "S/. 30.01 - S/. 50.00",
                    "Codigo": "pre-30-50",
                    "ValorMinimo": "30.01",
                    "ValorMaximo": "50.01"
                },
                {
                    "FiltroSeccion": "Precios",
                    "CampoES": "precio",
                    "TipoOperadorES": "range",
                    "idFiltroBuscador": 13,
                    "IdPadre": null,
                    "Tipo": "inclusive",
                    "FiltroNombre": "S/. 50.01 - S/. 70.00",
                    "Codigo": "pre-50-70",
                    "ValorMinimo": "50.01",
                    "ValorMaximo": "70.01"
                },
                {
                    "FiltroSeccion": "Precios",
                    "CampoES": "precio",
                    "TipoOperadorES": "range",
                    "idFiltroBuscador": 14,
                    "IdPadre": null,
                    "Tipo": "inclusive",
                    "FiltroNombre": "S/. 70.01 a más",
                    "Codigo": "pre-70-0",
                    "ValorMinimo": "70.01",
                    "ValorMaximo": "0"
                },
                {
                    "FiltroSeccion": "Secciones",
                    "CampoES": "seccion1.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 15,
                    "IdPadre": null,
                    "Tipo": "excluded",
                    "FiltroNombre": "Gana+ / Ofertas",
                    "Codigo": "sec-gana",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Secciones",
                    "CampoES": "seccion1.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 16,
                    "IdPadre": null,
                    "Tipo": "excluded",
                    "FiltroNombre": "Catálogo",
                    "Codigo": "sec-cat",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Secciones",
                    "CampoES": "seccion1.keyword",
                    "TipoOperadorES": "term",
                    "idFiltroBuscador": 17,
                    "IdPadre": null,
                    "Tipo": "excluded",
                    "FiltroNombre": "Expofertas",
                    "Codigo": "sec-exp",
                    "ValorMinimo": "",
                    "ValorMaximo": ""
                },
                {
                    "FiltroSeccion": "Precios",
                    "CampoES": "precio",
                    "TipoOperadorES": "range",
                    "idFiltroBuscador": 18,
                    "IdPadre": 11,
                    "Tipo": "inclusive",
                    "FiltroNombre": "Hasta S/. 10.00",
                    "Codigo": "pre-0-10",
                    "ValorMinimo": "0",
                    "ValorMaximo": "10.01"
                },
                {
                    "FiltroSeccion": "Precios",
                    "CampoES": "precio",
                    "TipoOperadorES": "range",
                    "idFiltroBuscador": 19,
                    "IdPadre": 11,
                    "Tipo": "inclusive",
                    "FiltroNombre": "S/. 10.01 - S/. 20.00",
                    "Codigo": "pre-10-20",
                    "ValorMinimo": "10.01",
                    "ValorMaximo": "20.01"
                },
                {
                    "FiltroSeccion": "Precios",
                    "CampoES": "precio",
                    "TipoOperadorES": "range",
                    "idFiltroBuscador": 20,
                    "IdPadre": 18,
                    "Tipo": "inclusive",
                    "FiltroNombre": "Hasta S/. 5.00",
                    "Codigo": "pre-0-5",
                    "ValorMinimo": "0",
                    "ValorMaximo": "5.01"
                }
            ]
        }
    }


}