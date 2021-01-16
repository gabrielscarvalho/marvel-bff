module.exports = ({ services }) => {

  const { SearchService } = services.search;

  /**
   * SearchController
   */
  class SearchController {
    /**
     * get
     * @param {HttpRequest} req 
     * @param {HttpResponse} res 
     * @returns {HttpResponse} result
     */
    static async get(req, res){
      try {
        const result = SearchService.find(req.params.cep);
        return res.json(result);
      } catch (error) {
        if(error.message == '404') return res.status(404).json({ message: 'CEP não encontrado!', errorCode: 404});
        return res.status(500).json({ message: 'Erro interno!', errorCode: 500, trace: error });
      }
    }
  }

  return { SearchController };

};