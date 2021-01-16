module.exports = ({ express, controllers }) => {

  const { ComicsController } = controllers.comics;

  express.get('/cep/:cep', ComicsController.get);

};