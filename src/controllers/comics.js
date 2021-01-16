module.exports = ({ services, controllers }) => {

  const { ComicsService } = services.comics;

  /**
   * ComicsController
   */
  class ComicsController {
    /**
     * get
     * @param {HttpRequest} req 
     * @param {HttpResponse} res 
     * @returns {HttpResponse} result
     */
    static async get(req, res){
      try {
        const result = await ComicsService.find(req.query.offset, req.query.limit);
        return res.json(result);
      } catch (error) {
        return res.status(500).json({ message: 'Internal Error', errorCode: 500, trace: error });
      }
    }
  }

  return { ComicsController };

};