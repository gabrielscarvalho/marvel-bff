module.exports = ({ repositories }) => {

  const { CepRepository } = repositories.cep;

  class SearchService{
    static find(cep){
      const result = CepRepository.get(cep);
      if(result) return result;
      throw new Error('404');
    }
  }

  return { SearchService };

};