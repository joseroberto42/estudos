"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const deleteCountryById_1 = require("./endpoints/deleteCountryById");
const getAllCountries_1 = require("./endpoints/getAllCountries");
const getCountryById_1 = require("./endpoints/getCountryById");
const getRandomCountry_1 = require("./endpoints/getRandomCountry");
app_1.app.get("/countries", getAllCountries_1.getAllCountries);
app_1.app.get("/countries/random", getRandomCountry_1.getRandomCountry);
app_1.app.get("/countries/:id", getCountryById_1.getCountryById);
app_1.app.get("/countries/:valor", (req, res) => { res.send("resposta"); });
app_1.app.delete("/countries/:id", deleteCountryById_1.deleteCountryById);
//# sourceMappingURL=index.js.map