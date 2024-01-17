// CommonJS -> ES6 Modules

const path = require('path');

const axios = require('axios');

const { Person } = require('./mod');

const mod = require('./mod');

const p1 = new Person(mod.firstName, mod.lastName);

console.log(mod);

console.log(p1);