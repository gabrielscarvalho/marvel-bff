const cepData = require('./data/ceps.json');

class CepRepository{
  /**
   * get
   * @param {*} value To find in mock
   */
  static get(value){
    return cepData.ceps.find(cep => {
      if(cep.id == value) return true;
    });
  }
}


module.exports = { CepRepository };