const express = require('express');
const app = express();
const axios = require('axios');
const md5 = require('md5');

const MARVEL_URL = 'http://gateway.marvel.com/v1/public';
const apiKey = '8623fc37ce54b25f8302bf4ea3f4c7af';
const privateKey = '1b2e8c7fd3399053a8185a471baba77e15262ba8';

app.get('/', (req, res) => {
  const ts = '1';
  const hash = md5(`${ts}${privateKey}${apiKey}`);
  const url = `${MARVEL_URL}/comics?apikey=${apiKey}&ts=${ts}&hash=${hash}&limit=10&offset=1`;
  console.log('Accessing: ', url);
  axios
    .get(url)
    .then((response) => {
      //const json = CircularJSON.stringify(response);
      res.send(response.data.data);
    })
    .catch((error) => {
      console.log('response status', error);
      res.send(error);
    });
});

app.listen(3000);
