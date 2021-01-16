const axios = require('axios');
const md5 = require('md5');

module.exports = () => {

  //todo: externalize to environment file
  const MARVEL_URL = 'http://gateway.marvel.com/v1/public';
  const apiKey = '8623fc37ce54b25f8302bf4ea3f4c7af';
  const privateKey = '1b2e8c7fd3399053a8185a471baba77e15262ba8';

  /**
   * MarvelController
   */
  class MarvelRepository {
    
    /**
     * Do a GET request in Marvel's api.
     * @param {HttpRequest} req 
     * @param {HttpResponse} res 
     * @returns {HttpResponse} result
     */
    static get(urlSuffix, params = {}) {
      const url = `${MARVEL_URL}${urlSuffix}`;
      const ts = '1';
      const hash = md5(`${ts}${privateKey}${apiKey}`);
      params = { ...params, apikey: apiKey, ts, hash };

      return axios.get(url, { params });
    }

    static getComics(params = {}) {
      return MarvelRepository.get('/comics', params);
    }

  }

  return { MarvelRepository };

};