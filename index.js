
const express = require('express');
const consign = require('consign');

const app = { express : express() };

require('dotenv').config();

consign({ verbose: true, cwd: 'src' })
 .include('configs')
 .then('repositories')
 .then('services')
 .then('controllers')
 .then('routes')
 .then('http.js')
 .into(app)

module.exports = app