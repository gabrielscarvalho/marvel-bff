module.exports = ({ express, controllers }) => {

  const { SearchController } = controllers.search;

  express.get('/cep/:cep', SearchController.get);

};